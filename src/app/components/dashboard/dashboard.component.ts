import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public condition = false;

  public showSnippet = true;

  constructor(
    public afAuth: AngularFireAuth,
    public auth: AuthService,
    private router: Router
  ) {
    this.afAuth.authState.pipe(delay(500))
      .subscribe(() => this.showSnippet = false);

    this.afAuth.authState.subscribe(authentication => {
      if (authentication) {
        this.router.navigateByUrl('/dashboard/clients');
      }
    });
  }

  ngOnInit(): void { }

  public onToggle() {
    this.condition = !this.condition;
  }

}
