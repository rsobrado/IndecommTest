import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) {}

  getTweets(count: number): Promise<Array<any>> {
  	return new Promise(resolve => {
      this.http.get(this.generateUrl(count)).subscribe(data => {
        resolve((data as Array<any>));
      });
    });
  }

  generateUrl(count: number) {
  	return `http://localhost:7890/1.1/statuses/home_timeline.json?count=${count}`;
  }
}
