import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit {
  src?: SafeResourceUrl;

  constructor(
    private socialAuthService: SocialAuthService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://charts.mongodb.com/charts-project-0-yupdi/embed/charts?id=c187812f-e71f-4cfb-a17e-eb52f7b388c2&maxDataAge=10&theme=light&autoRefresh=false&filter={"user_id":%20{$eq:%20${user.id}}}`
      );
    });
  }
}
