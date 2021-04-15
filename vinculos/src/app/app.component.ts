import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vinculos';

nome = "José";
idade = 20;

lancarDados() {
  return Math.floor(Math.random() * 6 + 1);
}
}
