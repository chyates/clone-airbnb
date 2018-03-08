import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Listing } from '../listing';
import { Location } from '../location';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  nLoc = new Location();
  currentUser = new User();
  currUserId: number;

  allStates = ['Select a state','AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

  validLoc = false;
  validateLocation(){
    return this._localService.createLocation(this.nLoc)
    .then(data => this.validLoc = true);
  }

  toHost() {
    return this._localService.toHost(this.currUserId, this.currentUser)
    .then(data => {
      this.currentUser = data.user;
      console.log("Updated user:", this.currentUser);
    })
  }

  getCurrentUser(){
    this._localService.currentUser()
    .then(data => {
      if (data === {}) {
        console.log("No current user");
      } else {
        console.log("Current user:", data.user);
        this.currentUser = data.user;
        this.currUserId = data.user._id;
      }
    })
  }

  logout() {
    this._localService.logoutUser()
    .then(data => this._router.navigateByUrl('/'));
  }
}
