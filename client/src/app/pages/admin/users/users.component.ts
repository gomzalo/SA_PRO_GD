import { Component, OnInit} from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Country {
  id?: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = []
  closeResult = '';
  page = 1;
  pageSize = 4;
  size = 0;
  countries: Country[];
  user: any;
  isOpen=false;

  constructor(private userService: UserService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.getusers();
    this.size = this.users.length

  }
  getusers() {
    this.userService.getAllUsers()
      .subscribe((data) => { this.users = data.data });

  }


  editar(usuario, content) {
 
    this.user = usuario;
    this.isOpen=true;

  }
}
