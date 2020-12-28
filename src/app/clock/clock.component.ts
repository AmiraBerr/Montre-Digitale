import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClockService } from 'src/app/services/clock.service'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {

  public time;
  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.time = this.clockService.getCurrentTime();
  }
}

