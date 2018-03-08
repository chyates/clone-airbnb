import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Listing } from '../listing';
import { Location } from '../location';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.css']
})
export class ListingFormComponent implements OnInit {

  constructor(    
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getLastLoc();
    this.getCurrentUser();
    // this._route.params.subscribe(params => this.getLastLoc(params['id']));
  }

  addedLoc = new Location();
  locID: String;
  thisListing = new Listing();

  currentUser = new User();
  currUserId: String;

  getLastLoc(){
    return this._localService.findLastCreated()
    .then(data => {
      this.addedLoc = data.location;
      this.locID = data.location[0]._id;
      this.thisListing.location = data.location[0]._id;
      console.log(data);
      console.log(this.locID);
      console.log("Sub loc", data['location']);
  });
  }

  validateListing(){
    console.log(this.thisListing);
    return this._localService.createListing(this.thisListing)
    .then(data => this._router.navigateByUrl('listings'));
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
