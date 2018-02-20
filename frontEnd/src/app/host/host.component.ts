import { Component, OnInit } from '@angular/core';
// import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../user';
import { Listing } from '../listing';
import { LocalApiService } from '../local-api.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
