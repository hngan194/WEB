import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule nếu cần
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SigninAccountComponent } from './components/signin-account/signin-account.component';
import { DashboardChangePasswordComponent } from './components/dashboard-change-password/dashboard-change-password.component';
import { CommonQuestionComponent } from './components/common-question/common-question.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardEditProfileComponent } from './components/dashboard-edit-profile/dashboard-edit-profile.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    BlogComponent,
    AboutusComponent,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    CartComponent,
    SigninAccountComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    RouterModule.forRoot([]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SidebarComponent,
    DashboardChangePasswordComponent,
    CommonQuestionComponent,
    DashboardEditProfileComponent,
  ],
  providers: [AuthService, AlertService], // Thêm các service vào đây nếu cần
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }