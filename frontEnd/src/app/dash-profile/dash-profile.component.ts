import { Component, OnInit } from '@angular/core';
import { LocalApiService } from '../local-api.service';
import { Router } from '@angular/router';
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
    private _router: Router
  ) { }

  ngOnInit() {
  }

  upUser = new User();

  validateProfile(){
    
  }
}
