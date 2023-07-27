import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   faceSnaps! : FaceSnap[]; 
   ngOnInit(){
    this.faceSnaps = [
      {
        title: 'Archibald',
        description : 'Mon meilleiur ami depuis tout petit !',
        imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate : new Date(),
       snaps : 160,
       location : "paris"
      },
      {
        title: 'Chuck Bass',
        description : 'Mon beau goss !',
        imageUrl : 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate : new Date(),
       snaps : 0
       }
    ];
     
   }
}
