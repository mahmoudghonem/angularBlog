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
import { BlogcreateComponent } from './detailspage/blogcreate/blogcreate.component';
import { TruncatePipe } from './helpers/pipes/truncate.pipe';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BlogdetailComponent } from './detailspage/blogdetail/blogdetail.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomelandComponent } from './homepage/homeland/homeland.component';
import { ClickPointerDirective } from './helpers/cursor/click-pointer.directive';
import { ArticledetailComponent } from './detailspage/articledetail/articledetail.component';
import { AuthordetailComponent } from './detailspage/authordetail/authordetail.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ArticlecommentsComponent } from './detailspage/articlecomments/articlecomments.component';
import { GetrandomcolorDirective } from './helpers/randomcolor/getrandomcolor.directive';
import { SearchpageComponent } from './searchpage/searchpage/searchpage.component';
import { ProfilepageComponent } from './profile/profilepage/profilepage.component';
import { SettingpageComponent } from './profile/settingpage/settingpage.component';


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
    BlogcreateComponent,
    TruncatePipe,
    BlogdetailComponent,
    NavbarComponent,
    HomelandComponent,
    ClickPointerDirective,
    ArticledetailComponent,
    AuthordetailComponent,
    ArticlecommentsComponent,
    GetrandomcolorDirective,
    SearchpageComponent,
    ProfilepageComponent,
    SettingpageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      }
    })
  ],
  providers: [
    UserService,
    BlogService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
