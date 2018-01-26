import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  i = 0;
  interval;
  @Output() tickEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => { this.tryFire(); }, 2000);
  }

  onStop() {
    clearInterval(this.interval);
  }

  tryFire() {
      this.tickEvent.emit(this.i++);
      console.log(this.i);
  }
}
