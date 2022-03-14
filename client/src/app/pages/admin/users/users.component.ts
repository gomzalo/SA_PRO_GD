import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service'

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
  users=[]

  page = 1;
  pageSize = 4;
  size=0;
  countries: Country[];

  constructor(private userService:UserService) { 
  
  }

  ngOnInit(): void {
    this.getusers();
    this.size = this.users.length
  
  }
  getusers(){
    this.userService.getAllUsers()
      .subscribe((data) => { this.users = data });
  
  }



}
