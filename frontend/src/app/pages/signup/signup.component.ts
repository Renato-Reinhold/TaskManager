import {Component, inject} from '@angular/core';
import {LoginDefaultLayoutComponent} from '../../components/login-default-layout/login-default-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginPiComponent} from '../../components/login-pi/login-pi.component';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginService} from '../../services/login.service';

interface SignupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  imports: [
    LoginDefaultLayoutComponent,
    ReactiveFormsModule,
    LoginPiComponent,
    MatIcon
  ],
  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit(){
    this.loginService.login(this.signupForm.value.email, this.signupForm.value.password).subscribe({
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
    this.router.navigate(['login']);
  }

}
