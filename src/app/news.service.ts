import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsType[]> {
    return this.http.get('https://newsdata.io/api/1/news?apikey=pub_365258bbe37bdd153460e3b376adc63c4629d').pipe(
      map((response: any) => {
        return response.results
      })
    )
  }
}

export type NewsType = {
  article_id: string;
  title: string;
  description: string;
  image_url: string;
  category: string[];
  link: string;
}
