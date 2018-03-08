import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../listing';
import { User } from '../user';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-dash-profile',
  templateUrl: './dash-profile.component.html',
  styleUrls: ['./dash-profile.component.css']
})
export class DashProfileComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCurrentUser();
    this._route.params.subscribe(params => params['id']);
    // this._route.params.subscribe(params => this.getCurrentUser(params['id']));
  }

  upUser = new User();
  currUserId: number;
  currentUser = new User();

  validateProfile(){
    this._localService.updateUser(this.currUserId, this.upUser)
    .then(data => console.log(this.upUser));
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
