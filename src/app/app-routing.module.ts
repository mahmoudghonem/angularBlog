import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BlogcreateComponent } from './detailspage/blogcreate/blogcreate.component';
import { BlogdetailComponent } from './detailspage/blogdetail/blogdetail.component';
import { HomeComponent } from './homepage/home/home.component';
import { ProfilepageComponent } from './profile/profilepage/profilepage.component';
import { SettingpageComponent } from './profile/settingpage/settingpage.component';
import { SearchpageComponent } from './searchpage/searchpage/searchpage.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article/:id', component: BlogdetailComponent },
  { path: 'profile/:id', component: ProfilepageComponent },
  { path: 'setting/:id', component: SettingpageComponent },
  { path: 'search/:searchtxt', component: SearchpageComponent },
  { path: 'writepost', component: BlogcreateComponent ,canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
