import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    FormResidenceComponent,
    NavbarComponent,
    ApartmentsComponent,
    DetailAppartmentComponent,
    FormAppartmentComponent,
    NotFoundComponent,
    FormAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
