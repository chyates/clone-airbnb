// Module imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component imports
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { ListingComponent } from './listing/listing.component';
import { ListingInfoComponent } from './listing-info/listing-info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent  },
  { path: 'homes', component: LandingPageComponent },
  { path: 'listings', component: ListingComponent },
  { path: 'listings/:id', component: ListingInfoComponent },
  { path: 'account', component: UserDashComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
