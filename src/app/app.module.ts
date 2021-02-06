import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { jwtOptionsFactory } from './helpers/intercerptor/JwtOptions';
import { HomeComponent } from './homepage/home/home.component';
import { NavbarUnsignComponent } from './navbar/navbar-unsign/navbar-unsign.component';
import { NavbarSignComponent } from './navbar/navbar-sign/navbar-sign.component';
import { FollowblogsComponent } from './homepage/followblogs/followblogs.component';
import { PublicblogsComponent } from './homepage/publicblogs/publicblogs.component';
import { BlogcardComponent } from './homepage/blogcard/blogcard.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarSignComponent,
    NavbarUnsignComponent,
    FollowblogsComponent,
    PublicblogsComponent,
    BlogcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [
    //   {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
