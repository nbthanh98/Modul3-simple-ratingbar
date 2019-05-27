import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: number;
  title = 'rating';
  nhanData(data) {
    this.data = data;
  }
}
