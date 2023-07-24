import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snap-face',
  templateUrl: './snap-face.component.html',
  styleUrls: ['./snap-face.component.scss']
})
export class SnapFaceComponent implements OnInit{
  title! : string;
  description! : string;
  createdDate! : Date;
  snaps! : number;
  imageUrl! : string;

  ngOnInit(): void {
    this.title = "FaceSnap";
    this.description = "This is my first description for face snaps";
    this.createdDate = new Date;
    this.snaps = 6;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
  }

  onFaceSnap(){
    this.snaps++;
  }
}
