import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { UserReducer } from './state/uesr.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthGuard } from './AuthGuard';
import { NewcompComponent } from './components/newcomp/newcomp.component';
import { GenerateReportComponent } from './components/generate-report/generate-report.component';
import { InfoComponent } from './components/info/info.component';
import { AjoutTypeComponent } from './ajouttype/ajouttype.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopupComponent } from './popup/popup.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { EditInfoDialogComponent } from './components/edit-info-dialog/edit-info-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    NavbarComponent,
    UserListComponent,
    UserProfileComponent,
    NewcompComponent,
    GenerateReportComponent,
    InfoComponent,
    AjoutTypeComponent,
    PopupComponent,
    InfoListComponent,
    ConfirmationDialogComponent,
    EditInfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    StoreModule.forRoot({user:UserReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({maxAge:50, logOnly: !isDevMode()})
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
