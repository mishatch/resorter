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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
