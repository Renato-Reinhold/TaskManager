import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login-default-layout',
  imports: [],
  templateUrl: './login-default-layout.component.html',
  styleUrl: './login-default-layout.component.scss'
})
export class LoginDefaultLayoutComponent {
  @Input() label: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() disablePrimaryBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.onNavigate.emit();
  }

}
