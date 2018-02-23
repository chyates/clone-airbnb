import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router) { }

  ngOnInit() {
    this.getLastLoc();
  }

  addedLoc = new Location();
  thisListing = new Listing();

  getLastLoc(){
    return this._localService.findLastCreated()
    .then(data => this.addedLoc = data.location);
  }
}
