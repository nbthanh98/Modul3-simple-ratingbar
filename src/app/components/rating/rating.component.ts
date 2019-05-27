import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {listRate} from '../../model/ratingBar';
import {isNumber} from 'util';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  // @ts-ignore
  // tslint:disable-next-line:ban-types
  @Output() sendDateToParentComponent = new EventEmitter< Number>();
  constructor() {
  }

  listRate = listRate;

  selected: number;

  poin: number;

  ngOnInit() {
  }

  onSelectedRate(rate: number) {
    this.poin = rate;
    this.sendDateToParentComponent.emit(this.poin);
  }
}
