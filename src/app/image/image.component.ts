import { Component, Input, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input()
  imgSrc: string = 'https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g'; //Make sure you add your image URL
 
  @Input()
  altTxt?: string = 'Pondicherry French Hotel';
 
  @Input()
  figCaptionTxt?: string =
    'The French Quarter or White Town area in Pondicherry is filled with elegant colonial mansions in the midst of tree-lined boulevards, named on French streets beginning with "rue", numerous parks and charming cafés.';
 
  @Input()
  imgOpacity?: number = 1;
 
  constructor() {}
 
  ngOnInit(): void {}
}