import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  constructor(private router: Router) {}

  username: string | undefined;
  password: string | undefined;

  formControl = new FormControl('', [Validators.required]);

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['home']);
    } else {
      alert('Hatalı kullanıcı adı ya da Şifre');
    }
  }
}
