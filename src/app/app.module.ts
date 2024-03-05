import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { ResorterServicesComponent } from './components/home/resorter-services/resorter-services.component';
import { ServiceCardComponent } from './components/home/resorter-services/service-card/service-card.component';
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { CarRentalComponent } from './components/car-rental/car-rental.component';
import { FilterComponent } from './components/car-rental/filter/filter.component';
import { CarsListComponent } from './components/car-rental/cars-list/cars-list.component';
import { CarCardComponent } from './components/car-rental/cars-list/car-card/car-card.component';
import { RentalFormComponent } from './components/car-rental/cars-list/rental-form/rental-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ReceiptComponent } from './components/car-rental/cars-list/receipt/receipt.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ResorterServicesComponent,
    ServiceCardComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HotelsComponent,
    CarRentalComponent,
    FilterComponent,
    CarsListComponent,
    CarCardComponent,
    RentalFormComponent,
    ReceiptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
