import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { DetailAppartmentComponent } from './detail-appartment/detail-appartment.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: ResidencesComponentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'addResidence', component: FormResidenceComponent },
  { path: 'showApparts/:id', component: ApartmentsComponent },
  { path: 'AddAppartment', component: FormAppartmentComponent },
  { path: 'appartment-details/:id', component: DetailAppartmentComponent },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
