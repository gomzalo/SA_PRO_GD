import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imgCat : boolean;
  imgProd : boolean;
  imgImport : boolean;
  imgSel : boolean;
  imgBrand : boolean;
  imgValor : boolean;
  imgUser : boolean;
  imgBack : boolean;


  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    
  }

  goCategories(){
    this.router.navigate(['./home/categories']);
  }

  goProducts(){
    this.router.navigate(['./home/products']);
  }

  goSelection(){
    this.router.navigate(['./home/products/new']);
  }

  goMultimedia(){
    this.router.navigate(['./home/multimedia']);
  }

  goUsers(){
    this.router.navigate(['./home/users']);
  }

  goBackup(){
    this.router.navigate(['./home/backup']);
  }

  goValue(){
    this.router.navigate(['./home/value']);
  }

}
