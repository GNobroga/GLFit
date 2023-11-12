import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements DoCheck {

  public login: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private router: Router) {}

  public ngDoCheck(): void {
      console.log(this.login.hasError("required"))
  }

  public send(): void {
    const username = this.login.get('username');
    const password = this.login.get('password');

    if (!this.login.valid) {

      if (password.errors) {
        password.markAsDirty();
        password.markAsTouched();
      }

      if (username.errors) {
        username.markAsDirty();
        username.markAsTouched();
      }
    }
    else {
      this.router.navigate(['/dashboard']);
    }

  }

  get usernameErrorMessage(): string {
    const username = this.login.get('username');

    if (!username.dirty || !username.touched) return '';

    if (username.hasError('required'))
    {
      return 'O username é requerido';
    }

    return '';
  }

  get passwordErrorMessage(): string {
    const password = this.login.get('password');

    if (!password.dirty || !password.touched) return '';

    if (password.hasError('required'))
    {
      return 'A senha é requerida';
    }

    return '';
  }
}
