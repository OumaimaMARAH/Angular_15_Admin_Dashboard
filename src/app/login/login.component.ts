import { Component } from '@angular/core';
import { LoginService } from './serviceLogin/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: { email: string, password: string } = { email: '', password: '' };
  constructor(private loginService: LoginService, private router:Router){
    
  }

  onLogin():void{
    this.loginService.login(this.credentials).subscribe({
      next : (response) => {
        console.log('Login successful', response)
        this.router.navigate(['/dashboard']).then(success=> {
          if(success){
            console.log('Navigation to dashboard successful!')
          } else {
            console.log('Navigation to dashboard failed!')
          }
        })
      },
      error:(error) => {
        console.error('Login failed', error)
        console.log('Login details', error.error)
      }

    });
  }
}

