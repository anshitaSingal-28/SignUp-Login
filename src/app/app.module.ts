import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // ✅ Import routing module

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';

import { AuthService } from './services/auth.service'; // ✅ Import AuthService
import { AuthGuard } from './guards/auth.guard'; // ✅ Import AuthGuard

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // ✅ Required for formGroup validation
    HttpClientModule,
    AppRoutingModule // ✅ Use AppRoutingModule for clean routing
  ],
  providers: [AuthService, AuthGuard], // ✅ Provide AuthService & AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule {}
