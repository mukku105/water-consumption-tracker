// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ConsumptionService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { Tracker } from './tracker';
import { Http, Response } from '@angular/http';

@Injectable()
export class ConsumptionService {
    private trackerUrl = '/api/tracker';

    constructor (private http: Http) {}

    // get("/api/tracker")
    getTracker(): Promise<void | Tracker[]> {
      return this.http.get(this.trackerUrl)
                 .toPromise()
                 .then(response => response.json() as Tracker[])
                 .catch(this.handleError);
    }

    // post("/api/tracker")
    createTracker(newTracekr: Tracker): Promise<void | Tracker> {
      return this.http.post(this.trackerUrl, newTracekr)
                 .toPromise()
                 .then(response => response.json() as Tracker)
                 .catch(this.handleError);
    }

    // get("/api/tracker/:id") endpoint not used by Angular app

    // delete("/api/tracker/:id")
    deleteTracker(delTrackerId: String): Promise<void | String> {
      return this.http.delete(this.trackerUrl + '/' + delTrackerId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/tracker/:id")
    updateTracker(putTracker: Tracker): Promise<void | Tracker> {
      var putUrl = this.trackerUrl + '/' + putTracker._id;
      return this.http.put(putUrl, putTracker)
                 .toPromise()
                 .then(response => response.json() as Tracker)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}
