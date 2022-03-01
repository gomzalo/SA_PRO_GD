import {
	Component,
	OnInit
} from '@angular/core';
import {
	FormControl
} from '@angular/forms';
import {
	DualListComponent
} from 'angular-dual-listbox';
import {
	CookieService
} from 'ngx-cookie-service';
import {
	ActivatedRoute,
	Router
} from '@angular/router';
import Swal from 'sweetalert2'
import {
	QuerySnapshot,
	QueryDocumentSnapshot
} from '@angular/fire/firestore';
// Services
import {
	FirestoreService
} from 'src/app/core/services/firestore/firestore.service';

@Component({
	selector: 'app-form-assign',
	templateUrl: './form-assign.component.html',
	styleUrls: ['./form-assign.component.scss']
})
export class FormAssignComponent implements OnInit {
	format = {
		add: 'Agregar',
		remove: 'Eliminar',
		all: 'Todos',
		none: 'Quitar Selección',
		direction: DualListComponent.LTR,
		draggable: true,
		locale: 'da'
	};

	tab = 1;
	keepSorted = true;
	key: string;
	display: any;
	filter = false;
	source: Array < any > ;
	confirmed: Array < any > ;
	userAdd = '';
	disabled = false;

	sourceLeft = true;

	private users: Array < any > ;
	private usersApi: Array < any > ;
	private sourceStations: Array < any > ;
	confirmedStations = [];

	userAuthUid: string;

	userEditInfo: any;
	editForm = false;

	constructor(
		private firestoreService: FirestoreService,
		private cookieService: CookieService,
		private route: ActivatedRoute,
		private router: Router,
	) {
		this.userAuthUid = this.cookieService.get('uid');
		this.userEditInfo = this.router.getCurrentNavigation().extras.state;
		console.log(this.userEditInfo);
		this.route.params.subscribe(params => {
			this.editForm = Boolean(params['status']);
		});
		console.log(this.editForm);
	}

	ngOnInit() {
		this.getUsers();
		this.doReset();
	}

	arrayType = [{
		name: 'Rio Grande',
		detail: '(object array)',
		value: 'station'
	}];

	type = this.arrayType[0].value;

	private stationLabel(item: any) {
		return item.name;
	}

	private useStations() {
		this.key = 'uid';
		this.display = this.stationLabel;
		this.keepSorted = true;
		this.source = this.sourceStations;
		this.confirmed = this.confirmedStations;
		console.log(this.confirmed);
	}


	swapSource() {
		switch (this.type) {
			case this.arrayType[0].value:
				this.useStations();
				break;
		}
	}

	doReset() {
		this.sourceStations = this.usersApi;

		if (this.userEditInfo.usersAssign){
			for (let index = 0; index < this.userEditInfo.usersAssign.length; index++) {
				console.log(this.userEditInfo.usersAssign[index])
				this.confirmedStations.push(this.userEditInfo.usersAssign[index]);
			}
		}

		// Preconfirm some items.
		// if (this.editForm == true) {
		// 	this.confirmedStations = this.userEditInfo.usersAssign;
		// }
		// this.confirmedStations.push( this.stations[31] );

		this.useStations();

	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
		if (typeof this.source[0] === 'object') {
			const o = {};
			o[this.key] = this.source.length + 1;
			o[this.display] = this.userAdd;
			this.source.push(o);
		} else {
			this.source.push(this.userAdd);
		}
		this.userAdd = '';
	}

	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			const o = this.source[i];
			const found = this.confirmed.find((e: any) => e === o);
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}
	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
	}

	doFilter() {
		this.filter = !this.filter;
	}

	filterBtn() {
		return (this.filter ? 'Hide Filter' : 'Show Filter');
	}

	doDisable() {
		this.disabled = !this.disabled;
	}

	disableBtn() {
		return (this.disabled ? 'Enable' : 'Disabled');
	}

	swapDirection() {
		this.sourceLeft = !this.sourceLeft;
		this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
	}

	////////////////////////////////////////////////////////////////////////////////

	getUsers() {
		this.usersApi = [];
		this.firestoreService.getUsersFilterStatus(this.userAuthUid)
			.then((query: QuerySnapshot < any > ) => {
				query.docs.forEach((doc: QueryDocumentSnapshot < any > ) => {
					this.usersApi.push(doc.data());
				});
			});
		if (this.userEditInfo.usersAssign) {
			for (let index = 0; index < this.userEditInfo.usersAssign.length; index++) {
				console.log(this.userEditInfo.usersAssign[index])
				this.usersApi.push(this.userEditInfo.usersAssign[index]);
			}
			this.usersApi.forEach(element => {

			});
		}
		console.log(this.usersApi);
	}

	goCancel() {
		this.router.navigate(['./admin/proyects-assign']);
	}

	getUsersClick() {
		console.log(this.confirmed)
	}

	// CREATE PROYECT

	createProyect() {
		if (this.confirmed.length >= 1) {
			console.log(this.confirmed);
			this.handleUpdateProyect(this.confirmed)
		}
	}


	handleUpdateProyect(businessInfo: any) {
		const Info = {
			usersAssign: this.confirmed,
			status: 1,
			updateBy: this.userAuthUid,
			updateDate: new Date()
		}
		console.log(Info);
		this.firestoreService.updateProyects(Info, this.userEditInfo.uid).then(() => {
			this.successAlert('Proyecto Actualizado', 'El proyecto fue actualizado con exito.');
			this.router.navigate(['./admin/proyects-assign'])
		});
	}

	successAlert(title: string, body: string) {
		Swal.fire(
			title,
			body,
			'success'
		).then((resp => {
			this.router.navigate(['./admin/proyects-assign'])
		}))
	}

}