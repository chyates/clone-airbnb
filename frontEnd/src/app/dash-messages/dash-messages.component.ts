import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-messages',
  templateUrl: './dash-messages.component.html',
  styleUrls: ['./dash-messages.component.css']
})
export class DashMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  viewInbox = true;
  viewConversation = false;

  switchConversation(){
    this.viewConversation = true;
    this.viewInbox = false;
  }

}
