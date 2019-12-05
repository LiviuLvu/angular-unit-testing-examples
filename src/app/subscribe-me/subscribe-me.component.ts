import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe-me',
  templateUrl: './subscribe-me.component.html',
  styleUrls: ['./subscribe-me.component.css']
})
export class SubscribeMeComponent implements OnInit {
  public isSubscribed = false;

  constructor() { }

  ngOnInit() {
  }

  public onConfirmSubscription() {
    this.isSubscribed = true;
  }
}
