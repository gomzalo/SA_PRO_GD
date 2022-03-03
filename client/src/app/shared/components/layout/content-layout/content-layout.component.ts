import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {
  
  constructor(public navServices: NavService) {   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }


}
