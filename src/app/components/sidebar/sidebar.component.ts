import { ImageService } from './../../services/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   topic:string="";

  

  constructor(private imgService: ImageService) { }

  ngOnInit() {
    this.imgService.currentSidebarTopic.subscribe(res => {this.topic= res});
  }

  searchImagesByName($event){
    // console.log($event); 
    // this.imgService.getImagesByName($event);
    this.imgService.setSidebarTopic($event);
  }

}
