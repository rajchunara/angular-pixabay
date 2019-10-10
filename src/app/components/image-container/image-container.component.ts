import { ImageService } from './../../services/image-service.service';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {
  
  @Input()
  images=[];

  constructor(private imgService: ImageService, private el: ElementRef) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    console.log("image container");
    this.imgService.getImagesService()
    .subscribe(res => {this.images = res.hits;
    console.log(res);
    });    
  }

}


