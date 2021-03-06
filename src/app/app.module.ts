import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DiaryComponent } from './diary/diary.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HabitsComponent } from './habits/habits.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGuardService } from './auth-guard.service';
import { ProgressComponent } from './progress/progress.component';
import { AddHeaderInterceptor } from './auth-interceptor';
import { CreateComponent as CreateMealComponent } from './habits/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    DiaryComponent,
    HabitsComponent,
    LoginComponent,
    ProgressComponent,
    CreateMealComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'home',
        component: HomepageComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'diary',
        component: DiaryComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'habits',
        component: HabitsComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'habits/create',
        component: CreateMealComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'progress',
        component: ProgressComponent,
        canActivate: [AuthGuardService],
      },
      { path: 'login', component: LoginComponent },
      { path: '**', component: LoginComponent },
    ]),
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SocialLoginModule,
    // AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '792310928749-p2tvru9ldu02frukfhnhv4173b4t4el4.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
    AuthGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
