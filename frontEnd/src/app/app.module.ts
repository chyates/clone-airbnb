// Module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Component imports
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingComponent } from './listing/listing.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { ListingInfoComponent } from './listing-info/listing-info.component';
import { DashProfileComponent } from './dash-profile/dash-profile.component';
import { DashListingsComponent } from './dash-listings/dash-listings.component';
import { DashReservesComponent } from './dash-reserves/dash-reserves.component';
import { DashMessagesComponent } from './dash-messages/dash-messages.component';
import { HostComponent } from './host/host.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';

// Service imports
import { LocalApiService } from './local-api.service';
import { ListingFormComponent } from './listing-form/listing-form.component';
import { BookReserveComponent } from './book-reserve/book-reserve.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ListingComponent,
    UserDashComponent,
    ListingInfoComponent,
    DashProfileComponent,
    DashListingsComponent,
    DashReservesComponent,
    DashMessagesComponent,
    HostComponent,
    PublicProfileComponent,
    ListingFormComponent,
    BookReserveComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LocalApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
