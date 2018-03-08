import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { LogUser } from '../log-user';
import { Listing } from '../listing';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router,
  ) { }

  ngOnInit() {
    // this.getRecentListings();
  }

  recentListings;

  user = new User();
  regEmailError: string;
  
  logUser = new LogUser();
  emailError: string;
  passError: string;

  validateLogin() {
    return this._localService.loginUser(this.logUser)
      .then(data => {
        if (data.loggedIn === true) {
          this._router.navigateByUrl('listings');
        }
        if (data.emailError) {
          this.emailError = data.emailError;
        } 
        if (data.passwordError) {
          this.passError = data.passwordError;
        }
      }).catch(err => console.log(err));
  }

  validateReg() {
    this._localService.registerUser(this.user)
      .then(data => {
        if (data.loggedIn === true) {
          this._router.navigateByUrl('listings');
        }
        if(data.regEmailError){
          this.regEmailError = data.regEmailError;
        }
      }).catch(err => console.log(err));
  }

  getRecentListings(){
    this._localService.findRecentLand()
    .then(data => this.recentListings = data.listings);
  }

}
