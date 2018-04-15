// Module imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent  },
  { path: 'homes', component: LandingPageComponent },
  { path: 'listings', component: ListingComponent },
  { path: 'listings/:id', component: ListingInfoComponent },
  { path: 'account/:id', component: UserDashComponent },
  { path: 'host', component: HostComponent },
  { path: 'profile', component: PublicProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
