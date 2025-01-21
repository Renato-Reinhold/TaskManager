import {Component, inject} from '@angular/core';
import {LoginDefaultLayoutComponent} from '../../components/login-default-layout/login-default-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginPiComponent} from '../../components/login-pi/login-pi.component';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

interface LoginForm{
  email: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  imports: [
    LoginDefaultLayoutComponent,
    ReactiveFormsModule,
    LoginPiComponent,
    MatIcon
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: value => this._snackBar.open("Log in successfully!", '', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
        duration: 5 * 1000
      }),
      error: error => this._snackBar.open("Erro inesperado tente novamente mais tarde!", '', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
        duration: 5 * 1000
      }),
    })
  }

  navigate(){
    this.router.navigate(['signup']);
  }

}
