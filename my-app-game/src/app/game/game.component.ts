import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  run = false;
  i = 0;
  @Output() tickEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.run) {
        this.tryFire();
      } }, 2000);
  }

  onStart() {
    this.run = true;
  }

  onStop() {
    this.run = false;
  }

  tryFire() {
    if (this.run) {
      this.tickEvent.emit(this.i++);
      console.log(this.i);
    }
  }
}
