import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  @Input() faceSnap! : FaceSnap;

  buttonText! : string;

  ngOnInit(): void {
    this.buttonText = "Oh snap!";
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
