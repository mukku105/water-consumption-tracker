// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-consumption-details',
//   templateUrl: './consumption-details.component.html',
//   styleUrls: ['./consumption-details.component.css']
// })
// export class ConsumptionDetailsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Tracker } from '../tracker';
import { ConsumptionService } from '../consumption.service';
import { ConsumptionEntryComponent } from '../consumption-entry/consumption-entry.component';

@Component({
  selector: 'consumption-details',
  templateUrl: './consumption-details.component.html',
  styleUrls: ['./consumption-details.component.css'],
  providers: [ConsumptionService]
})

export class ConsumptionDetailsComponent implements OnInit {

  trackers: Tracker[]
  selectedTracker: Tracker

  constructor(private contactService: ConsumptionService) { }

  ngOnInit() {
     this.contactService
      .getTracker()
      .then((trackers: Tracker[]) => {
        this.trackers = trackers.map((track) => {
          if (!track.amount) {
            track.amount = 0.0
          }
          return track;
        });
      });
  }

  private getIndexOfTrack = (trackId: String) => {
    return this.trackers.findIndex((track) => {
      return track._id === trackId;
    });
  }

  selectTracker(track: Tracker) {
    this.selectedTracker = track
  }

  createNewTracker() {
    var track: Tracker = {
      name: '',
      amount: 0.0,
      date: new Date()
    };

    // By default, a newly-created track will have the selected state.
    this.selectTracker(track);
  }

  deleteTracker = (contactId: String) => {
    var idx = this.getIndexOfTrack(contactId);
    if (idx !== -1) {
      this.trackers.splice(idx, 1);
      this.selectTracker(null);
    }
    return this.trackers;
  }

  addTracker = (track: Tracker) => {
    this.trackers.push(track);
    this.selectTracker(track);
    return this.trackers;
  }

  updateTracker = (track: Tracker) => {
    var idx = this.getIndexOfTrack(track._id);
    if (idx !== -1) {
      this.trackers[idx] = track;
      this.selectTracker(track);
    }
    return this.trackers;
  }
}
