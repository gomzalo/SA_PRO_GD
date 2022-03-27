import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';

// Services
// import { AuthService } from 'src/app/core/services/auth/auth.service';

// Libs
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public menuItems: Menu[];
  public menuList: Menu[];
  public url: any;
  public fileurl: any;
  public userName: string;
  public roleName: string;

  constructor(private router: Router, public navServices: NavService, 
    // private authService: AuthService, 
    private cookieService: CookieService) {
    this.userName = this.cookieService.get('name');
    this.roleName = this.cookieService.get('role');
    const roleType = this.cookieService.get('roleType');

    this.getMenus('2');

    this.navServices.items.subscribe(menuItems => {
      this.menuItems = this.menuList
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
              if (subItems.path === event.url)
                this.setNavActive(subItems)
              if (!subItems.children) return false
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url)
                  this.setNavActive(subSubItems)
              })
            })
          })
        }
      })
    })
  }


  getMenus(role) {
    if (role === '2') {
      this.menuList = [{
          path: '/home',
          title: 'INICIO',
          type: 'link'
        }
        ,
        {
          path: './reportesadmin',
          title: 'REPORTES ADMINISTRADOR',
          type: 'link'
        },
        {
          path: './users',
          title: 'ADMINISTRACION USUARIOS',
          type: 'link'
        },
        {
          path: './business',
          title: 'ESTADIO',
          type: 'link'
        },
        {
          path: './branchs',
          title: 'PARTIDO',
          type: 'link'
        },
        {
          path: './proyects',
          title: 'ARBITROS',
          type: 'link'
        },
        {
          path: './equipo',
          title: 'EQUIPOS',
          type: 'link'
        },
        {
          path: './proyects-assign',
          title: 'JUGADOR',
          type: 'link'
        },
        {
          path: './proyects-assign',
          title: 'INCIDENCIA',
          type: 'link'
        },
        
        {
          path: './proyects-assign',
          title: 'COMPETENCIA',
          type: 'link'
        },
        {
          path: './noticias',
          title: 'NOTICIAS',
          type: 'link'
        },
        {
          path: './profile',
          title: 'Perfil',
          type: 'link'
        },
        {
          path: '',
          title: 'CERRAR SESIÓN',
          type: 'link'
        },
      ]
    }
  }

  logout() {

  }

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

}