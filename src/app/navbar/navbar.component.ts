import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

import { Affirmation } from '../affirmation';
import { AffirmationsService } from '../affirmations.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUrl?: String;
  faSeedling = faSeedling;
  affirmation: Affirmation[] = [];

  constructor(
    private router: Router,
    private affirmationService: AffirmationsService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        this.getAffirmation();
      }
    });
  }

  getAffirmation(): void {
    this.affirmationService
      .get()
      .subscribe((affirmation) => (this.affirmation = affirmation));
  }
}
