import { Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NewsService, NewsType } from '../../news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {

  @Input('news') news !: NewsType;

  constructor() { }

  ngOnInit(): void {
    // this.news$ = ;
  }
}
