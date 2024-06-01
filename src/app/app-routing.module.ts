import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/authentication/login/login.component";
import {HotelsComponent} from "./components/hotels/hotels.component";
import {CarRentalComponent} from "./components/car-rental/car-rental.component";
import {RentalFormComponent} from "./components/car-rental/rental-form/rental-form.component";
import {RegistrationComponent} from "./components/authentication/registration/registration.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AddCarComponent} from "./components/add-car/add-car.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'car-rental', component: CarRentalComponent },
  { path: 'rental-form', component: RentalFormComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'add-car', component: AddCarComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
