import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
// import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.style.scss']
})
export class NavComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  modalLogin() {
    const dialog = this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto'
    });
  }
}
