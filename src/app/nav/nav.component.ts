import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
// import { AutofillMonitor } from '@angular/cdk/text-field';
// import '../../../node_modules/materialize-css/dist/js/materialize.js';
import { MatSidenav } from '@angular/material/sidenav';
import { LoggerService } from '../logger/logger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.style.scss']
})
export class NavComponent implements OnInit {
  SideNavIsOpen = false;
  @ViewChild('sidenav')
  sidenav: MatSidenav;

  constructor(private dialog: MatDialog, public logger: LoggerService) {}

  ngOnInit() {}

  modalLogin() {
    const dialog = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
  logOut() {
    this.logger.loggedUser = false;
  }
}
