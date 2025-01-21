import {Component, EventEmitter, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

type InputTypes = "text" | "password" | "email";

@Component({
  selector: 'app-login-pi',
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginPiComponent),
      multi: true
    }
  ],
  templateUrl: './login-pi.component.html',
  styleUrl: './login-pi.component.scss'
})
export class LoginPiComponent implements ControlValueAccessor {
  @Input() type: InputTypes = "text";
  @Input() inputName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";

  value: string = "";
  onChange: any = () => {}
  onTouched: any = () => {}

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value)
  }

  writeValue(obj: any) {
    this.value = obj;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabled(obj: any) {}

}
