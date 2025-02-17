import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { AuthGuard } from './guards/auth.guard'; // ✅ Import AuthGuard

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'company-info', component: CompanyInfoComponent, canActivate: [AuthGuard] }, // ✅ Protect this route
  { path: '**', redirectTo: 'login' } // ✅ Wildcard route to handle unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
