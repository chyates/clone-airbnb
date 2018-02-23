import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { Listing } from '../listing';
import { Location } from '../location';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor(
    private _localService: LocalApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log("All states:", this.allStates);
  }

  nLoc = new Location();

  allStates = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY'];

  validLoc = true;
  validateLocation(){
    return this._localService.createLocation(this.nLoc)
    .then(data => this.validLoc = true);
  }

  
//   fileChange(event) {
//     let fileList: FileList = event.target.files;
//     if (fileList.length > 0) {
//       let file: File = fileList[0];
//       let formData: FormData = new FormData();
//       formData.append('uploadFile', file, file.name);
//       let headers = new Headers();
//       /** No need to include Content-Type in Angular 4 */
//       headers.append('Content-Type', 'multipart/form-data');
//       headers.append('Accept', 'application/json');
//       let options = new RequestOptions({ headers: headers });
//       this.http.post(`${this.apiEndPoint}`, formData, options)
//         .map(res => res.json())
//         .catch(error => Observable.throw(error))
//         .subscribe(
//           data => console.log('success'),
//           error => console.log(error)
//         )
//     }
// }

}
