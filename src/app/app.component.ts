import { Component } from '@angular/core';

// import { TwitterService } from 'ngx-twitter-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',  "../../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css"]
})
export class AppComponent {
  title = 'Twitter';
  result = '';
  // constructor(private twitter: TwitterService){ }
 
  getHomeTimeline(){
    console.log("click");
  //   this.twitter.get(
  //     'https://api.twitter.com/1.1/statuses/home_timeline.json',
  //     {
  //       count: 5
  //     },
  //     {
  //       consumerKey: 'consumerKey',
  //       consumerSecret: 'consumerSecret'
  //     },
  //     {
  //       token: 'token',
  //       tokenSecret: 'tokenSecret'
  //     }
  // ).subscribe((res)=>{
  //     this.result = res.json().map(tweet => tweet.text);
  // });
  }
}
