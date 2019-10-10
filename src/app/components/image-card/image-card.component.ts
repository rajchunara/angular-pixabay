import { Component, OnInit, ElementRef } from '@angular/core';
import { ImageService } from './../../services/image-service.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  images=[];

  constructor(private imgService: ImageService, private el: ElementRef) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    console.log("image container");
    this.imgService.getImagesService()
    .subscribe(res => {this.images = res.hits;
    console.log(this.images);
    });    
  }

  onDivClick(){
    console.log(this.el.nativeElement);
    
    
  }

}
