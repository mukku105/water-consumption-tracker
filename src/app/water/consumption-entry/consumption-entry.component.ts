// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-consumption-entry',
//   templateUrl: './consumption-entry.component.html',
//   styleUrls: ['./consumption-entry.component.css']
// })
// export class ConsumptionEntryComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, Input } from '@angular/core';
import { Tracker } from '../tracker';
import { ConsumptionService } from '../consumption.service';

@Component({
  selector: 'consumption-entry',
  templateUrl: './consumption-entry.component.html',
  styleUrls: ['./consumption-entry.component.css']
})

export class ConsumptionEntryComponent {
  @Input()
  track: Tracker;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private consumptionService: ConsumptionService) {}

  createTracker(track: Tracker) {
    this.consumptionService.createTracker(track).then((newTrack: Tracker) => {
      this.createHandler(newTrack);
    });
  }

  updateTracker(track: Tracker): void {
    this.consumptionService.updateTracker(track).then((updatedContact: Tracker) => {
      this.updateHandler(updatedContact);
    });
  }

  deleteTracker(trackerId: String): void {
    this.consumptionService.deleteTracker(trackerId).then((deletedTrackerId: String) => {
      this.deleteHandler(deletedTrackerId);
    });
  }
}
