import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {HotelsComponent} from "./components/hotels/hotels.component";
import {CarRentalComponent} from "./components/car-rental/car-rental.component";
import {RentalFormComponent} from "./components/car-rental/cars-list/rental-form/rental-form.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'car-rental', component: CarRentalComponent },
  { path: 'rental-form', component: RentalFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
