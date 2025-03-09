import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
import { CommonQuestionComponent } from './components/common-question/common-question.component';
import { SigninAccountComponent } from './components/signin-account/signin-account.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';

const routes : Routes = [
  { path: "aboutus", component: AboutusComponent },
  { path: "blog", component: BlogComponent},
  { path: 'dashboard-change-password', component: DashboardChangePasswordComponent },
  { path: 'common-question', component: CommonQuestionComponent },
  { path: 'signin', component: SigninAccountComponent },
  { path: 'dashboard-edit-profile', component: DashboardEditProfileComponent },
  { path: '', redirectTo: '/aboutus', pathMatch: 'full' }, // Trang mặc định
  { path: '**', redirectTo: '/aboutus' } // Nếu nhập sai URL, tự động về About Us
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }