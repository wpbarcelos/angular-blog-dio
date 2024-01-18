import { Component, Input } from '@angular/core';
import { NewsType } from '../../news.service';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input() news !: NewsType;

}
