import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit(): void {
  }

  goCategories(){
    this.router.navigate(['./admin/categories']);
  }

  goProducts(){
    this.router.navigate(['./admin/products']);
  }

  goSelection(){
    this.router.navigate(['./admin/products/new']);
  }

  goMultimedia(){
    this.router.navigate(['./admin/multimedia']);
  }

  goUsers(){
    this.router.navigate(['./admin/users']);
  }

  goBackup(){
    this.router.navigate(['./admin/backup']);
  }

  goValue(){
    this.router.navigate(['./admin/value']);
  }

}
