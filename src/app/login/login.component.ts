import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from '@angular/forms';
import { LoggerService } from '../logger/logger.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Post, Body } from '../models/pesron';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.style.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form')
  form: NgForm;
  loginMess: FormGroup;
  error = null;
  hide = true;
  constructor(private logerServices: LoggerService) {}

  ngOnInit() {
    this.loginMess = this.initLoginForm();
  }
  onSubmit(mess) {
    console.log('mess');
    console.log(mess.value);

    this.logerServices
      .postLoginUser(mess.value.emailFormControl, mess.value.paswordFormControl)
      .subscribe(a => {
        console.log(a);
      });

//     const _body: Body = {
//       email: 'test@test.pl',
//       password: 'admin1'
//     };

//     const post: Post = {
//       method: 'POST',
//       body: _body
//     };
// console.log(post);

//     this.logerServices.postLoggerPost(post).subscribe(
//       a => {
//         console.log('Back from post');
//         console.log(a);
//       },
//       (err: HttpErrorResponse) => {
//         console.log('Error');
//         console.log(err);
//       }
//     );
  }

  singUp() {}

  initLoginForm() {
    return new FormGroup({
      emailFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      paswordFormControl: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9$@$!%*?&]{5,}$')

        //  Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        // minimum 8 znaków jeden Duża litera, jedna cyfra, jednen znak specjalny
      ])
    });
  }
}
