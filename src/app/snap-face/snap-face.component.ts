import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;

  title! : string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imageUrl! : string;
  buttonText! : string;

  ngOnInit(): void {
    this.title = "FaceSnap";
    this.description = "This is my first description for face snaps";
    this.createdDate = new Date;
    this.snaps = 6;
    this.buttonText = "Oh snap!";
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }

  onFaceSnap(){
    if(this.buttonText === 'Oh snap!'){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, unsnap!";
    }else{
      this.faceSnap.snaps--;
      this.buttonText = "Oh snap!";
    }
  }
}
