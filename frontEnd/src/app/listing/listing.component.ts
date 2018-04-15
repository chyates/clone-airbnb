import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Listing } from '../listing';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => params['id']);
    // this._route.params.subscribe(params => this.currentListing(params['id']));
    this.getCurrentUser();
    this.getRecentListings();
  }


  hostId;
  allListings;
  currentUser = new User();
  thisListing;
  searchListings = [];
  listing = new Listing();
  recentListings;

  // currentListing(id){
  //   this._localService.findOneListing(id)
  //   .then(data => {
  //     this.hostId = data.listing._host,
  //     this.thisListing = data.listing
  //   });
  // }

  
  getCurrentUser(){
    this._localService.currentUser()
    .then(data => {
      if (data === {}) {
        console.log("No current user");
      } else {
        console.log("Current user:", data.user);
        this.currentUser = data.user;
      }
    })
  }

  getAllListings(){
    this._localService.findAllListings()
    .then(data => this.allListings = data.listings);
  }

  // searchByLocation(){
  //   this._localService.searchListings(this.listing.location)
  //   .then(data => this.searchListings = data.listings);
  // }

  getRecentListings(){
    console.log("Recent listings, component");
    this._localService.findRecentList()
    .then(data => {
      this.recentListings = data.listings
      console.log(this.recentListings);
    });
  }

  logout() {
    this._localService.logoutUser()
    .then(data => this._router.navigateByUrl('/'));
  }
}