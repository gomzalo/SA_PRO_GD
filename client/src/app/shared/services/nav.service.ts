import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Libs
import { CookieService } from 'ngx-cookie-service';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(private cookieService: CookieService) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}
	

	MENUITEMS: Menu[] = [
		{
			path: '/root', title: 'Inicio', icon: 'home', type: 'link'
		},
		{
			path: './users', title: 'Usuarios', icon: 'users', type: 'link'
		},
	]
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
