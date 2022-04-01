import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';


// Services
// import { AuthService } from 'src/app/core/services/auth/auth.service';

// Libs
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

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
  rol


  constructor(private router: Router, public navServices: NavService, 
     private authService: AuthService, 
    private cookieService: CookieService) {
   


 

  }

  
  async ngOnInit(): Promise<void> {
    this.getMenus(await this.authService.getSesion().id_rol);
    
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
    console.log(role);
    if (role === 1) {
      this.menuList = [
        {
          path: '/reportesadmin',
          title: 'REPORTES ADMINISTRADOR',
          type: 'link',

        },
        {
          path: '/users',
          title: 'ADMINISTRACION USUARIOS',
          type: 'link',

        },
        {
          path: '/estadio',
          title: 'ESTADIO',
          type: 'link',

        },
        {
          path: '/partido',
          title: 'PARTIDO',
          type: 'link',

        },
        {
          path: '/equipo',
          title: 'EQUIPOS',
          type: 'link'

        },

        {
          path: '/tecnico',
          title: 'TECNICO',
          type: 'link'

        },
        {
          path: '/incidencia',
          title: 'INCIDENCIA',
          type: 'link'

        },
        
        {
          path: '/compentencia',
          title: 'COMPETENCIA',
          type: 'link'

        },
        {
          path: '/noticias',
          title: 'NOTICIAS',
          type: 'link',
          rol:2
        },
        {
          path: '/profile',
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
    if (role === 2) {
      this.menuList = [
        {
          path: '/estadio',
          title: 'ESTADIO',
          type: 'link',

        },
        {
          path: '/partido',
          title: 'PARTIDO',
          type: 'link',

        },
        {
          path: '/equipo',
          title: 'EQUIPOS',
          type: 'link'

        },
        {
          path: '/tecnico',
          title: 'TECNICO',
          type: 'link'

        },
        {
          path: '/incidencia',
          title: 'INCIDENCIA',
          type: 'link'

        },
        
        {
          path: '/compentencia',
          title: 'COMPETENCIA',
          type: 'link'

        },
        {
          path: '/noticias',
          title: 'NOTICIAS',
          type: 'link',
          rol:2
        },
        {
          path: '/profile',
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
    if (role === 3) {
      this.menuList = [{
          path: '/home',
          title: 'INICIO',
          type: 'link',
        }
        ,
        {
          path: '/profile',
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
    this.router.navigate(['./login']);
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