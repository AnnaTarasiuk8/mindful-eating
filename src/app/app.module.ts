import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiaryComponent } from './diary/diary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HabitsComponent } from './habits/habits.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {AuthGuardService} from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    DiaryComponent,
    HabitsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent, canActivate: [AuthGuardService] },
      { path: 'home', component: HomepageComponent, canActivate: [AuthGuardService] },
      { path: 'diary', component: DiaryComponent, canActivate: [AuthGuardService] },
      { path: 'habits', component: HabitsComponent, canActivate: [AuthGuardService] },
      {path: 'login', component: LoginComponent},
      {path: '**', component: LoginComponent}
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule,
    // AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('792310928749-p2tvru9ldu02frukfhnhv4173b4t4el4.apps.googleusercontent.com') // your client id
          }
        ]
      }
    },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
