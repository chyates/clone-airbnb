import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';
import { Listing } from '../listing'
import { User } from '../user'
import { Reservation } from '../reservation'

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  viewProfile = true;
  viewReserves = false;
  viewListings = false;
  viewMessages = false;

  location;
  listing = new Listing();
  listings = [];
  searchListings = [];

  reservation = new Reservation();
  reservations = [];

  currentUser = new User();

  ngOnInit() {
    this.getCurrentUser();
    this.getUserListings();
    this.getUserReserves();
  }
  
  switchListing(){
    this.viewListings = true;
    this.viewProfile = false;
    this.viewReserves = false;
    this.viewMessages = false;
  }

  switchReserves(){
    this.viewReserves = true;
    this.viewProfile = false;
    this.viewListings = false;
    this.viewMessages = false;
  }

  switchProfile(){
    if (this.viewProfile === false){
      this.viewProfile = true;
      this.viewListings = false;
      this.viewReserves = false;
      this.viewMessages = false;
    }
  }

  switchMessages(){
    this.viewMessages = true;
    this.viewProfile = false;
    this.viewListings = false;
    this.viewReserves = false;
  }

  createListing(){
    return this._localService.createListing(this.listing)
    .then(data => {
      this.listings = data.listings;
      // this.switchviewListings();
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
      }
    })
  }

  searchByLocation(){
    this._localService.searchListings(this.listing.location)
    .then(data => this.searchListings = data.listings);
  }

  getUserListings(){
    this._localService.findAllUserListings()
    .then(data => {
      this.listings = data.listings,
      console.log("Made it to component, inside get user listings function")});
  }

  getUserReserves(){
    this._localService.viewAllReserves()
    .then(data => this.reservations = data.reservations);
  }
}