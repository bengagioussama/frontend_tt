import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './AuthGuard';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { AjoutTypeComponent } from './ajouttype/ajouttype.component';
import { FormsModule } from '@angular/forms';
import { InfoListComponent } from './components/info-list/info-list.component';
const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: 'full'},
  { path: "dashboard", component: DashboardComponent , canActivate: [AuthGuard]},
  { path: "register", component: RegisterComponent},
  { path: "info", component: InfoComponent},
  { path: "ajouttype", component: AjoutTypeComponent},
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent},
  { path: "user-list", component: UserListComponent},
  { path: "user-profile", component: UserProfileComponent},
  {path: "info-list",component: InfoListComponent},
  {path: "generate-component", component: GenerateReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
