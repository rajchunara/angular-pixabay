import { HttpClient } from '@angular/common/http';
import { ImageService } from './../../services/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  images:[];

  constructor(private imgService:ImageService) { }

  ngOnInit() {
  }

  getImagesByName(imageName){
    console.log(imageName);
    this.imgService.getImagesByName(imageName)
      .subscribe(res =>{
        this.images = res.hits;
        console.log(res.hits);        
      })
  }



}
