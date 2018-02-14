import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { APP_MENU, AppMenu } from '../../app-config.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  constructor(@Inject(APP_MENU) private menu: AppMenu) {

  }

  ngOnInit() {

    console.log('NavBarComponent. Lista de opciones.', this.menu);

  }

  /**
   * getMenu
   */
  getMenu(): Array<any> {
    return this.menu.opciones;
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if(this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

}
