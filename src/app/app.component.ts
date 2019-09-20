import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numTweets: number = 30;
  tweetRows: Array<any> = [];
  searchText: String;

  constructor(private twitterService: TwitterService, private dialog: MatDialog) {
    let _numTweets = +localStorage.getItem('numTweets');
    if(_numTweets)
      this.numTweets = _numTweets;

    this.ngOnInit;
  }

  async loadTweets() {
    this.tweetRows = [];

    const tweetList: Array<any> = await this.twitterService.getTweets(this.numTweets);

    // Organize the tweets as rows in a matrix
    for(let i = 0; i < this.numTweets; i++){
      this.tweetRows.push(
        tweetList[i]
      );
    }
  }

  ngOnInit(){
    this.loadTweets();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      numTweets: this.numTweets,
      numTweetsCallback: numTweets => {
        this.numTweets = numTweets;
        localStorage.setItem('numTweets', numTweets);
        this.loadTweets();
      }
    };
    this.dialog.open(MyDialogComponent, dialogConfig);
  }
}
