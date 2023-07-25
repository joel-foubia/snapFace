import { Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   mySnap! : FaceSnap;
   middleSnap! : FaceSnap;
   lastSnap! : FaceSnap;
   ngOnInit(){
     this.mySnap = new FaceSnap(
       'Archibald',
       'Mon meilleiur ami depuis tout petit !',
       'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
       new Date(),
      0
     );
      this.middleSnap = new FaceSnap(
       'Archibald',
       'Mon meilleiur ami depuis tout petit !',
       'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
       new Date(),
      0
     );
   }
}
