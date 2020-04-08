import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(authentication => {
      if (authentication) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  ngOnInit(): void {
  }

}
