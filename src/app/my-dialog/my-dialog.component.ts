import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss']
})
export class MyDialogComponent implements OnInit {
  numTweets: number;
  numTweetsCallback;

  constructor(
    private dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.numTweets = data.numTweets;
    this.numTweetsCallback = data.numTweetsCallback;
  }

  close() {
    this.dialogRef.close();
  }

  changeNumTweets() {
    this.numTweetsCallback(this.numTweets);
  }

  ngOnInit() { }
}
