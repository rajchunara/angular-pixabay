import { ImageDialogComponent } from './../../image-dialog/image-dialog.component';
import { ImageService } from './../../services/image-service.service';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';


@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {

  topic:string="";

  @Input()
  images=[];

  constructor(private imgService: ImageService,
     private el: ElementRef,
     public dialog: MatDialog,
     private overlay: Overlay) {   
  }


  ngOnInit() {
    this.getImages();
    this.imgService.currentSidebarTopic.subscribe(res => {
      this.topic= res;
      this.imgService.getImagesByName(res)
        .subscribe(res1 =>{
        this.images = res1.hits;
        console.log(res1.hits);        
      });
    });
  }


  getImages(){
    console.log("image container");
    this.imgService.getImagesService()
    .subscribe(res => {this.images = res.hits;
    console.log(res);
    console.log("getImages" , this.topic);
    });       
  }

  openDialog(imageURL){
    this.dialog.open(ImageDialogComponent, {data:{imageURL: imageURL}, scrollStrategy: this.overlay.scrollStrategies.noop()});
    console.log(imageURL)
  }

  getNextImages(){
    this.imgService.getNextImages()
      .subscribe(res=>{
        this.images=[...this.images,...res.hits, ];
        console.log(this.images);
      })
  }


}


