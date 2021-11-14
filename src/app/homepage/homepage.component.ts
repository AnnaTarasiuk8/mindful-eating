import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    public socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.socialAuthService
      .signOut()
      .then(() => this.router.navigate(['login']));
  }
}
