import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Đảm bảo đã import FormsModule
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';  // Đảm bảo import đúng BlogComponent
import { AppRoutingModule } from './app-routing.module';  // Đảm bảo đã import AppRoutingModule
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,  // Đảm bảo BlogComponent được khai báo
    // Các component khác
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Đảm bảo FormsModule được import
    AppRoutingModule,  // Đảm bảo AppRoutingModule đã được import
    RouterModule,  // Đảm bảo RouterModule đã được import
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
