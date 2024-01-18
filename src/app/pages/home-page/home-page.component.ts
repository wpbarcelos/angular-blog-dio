import { Component } from '@angular/core';
import { Observable, first, of, skip, take, tap } from 'rxjs';
import { NewsService, NewsType } from '../../news.service';
import { CommonModule } from '@angular/common';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, BigCardComponent, SmallCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  news$ !: Observable<NewsType[]>;
  first: NewsType | null = null;
  others: NewsType[] = [];


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news$ = this.newsService.getNews()

    this.news$.subscribe(news => {
      [this.first, ...this.others] = [...news]
    })

  }
}
