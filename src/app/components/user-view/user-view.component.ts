import { ImageService } from './../../services/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})



export class UserViewComponent implements OnInit {
  images=[];
  users:IUser[]=[];
  userName=[];
  userURL=[];
  user={
    name:'',
    userImageURL:''
  }

  constructor(private imgService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    console.log("image container");
    this.imgService.getImagesService()
    .subscribe(res => {
      this.images = res.hits;
      this.getUsers(res.hits);
    });    
  }

  getUsers(images){   
    for(let i=0; i<images.length; i++){
      console.log(images[i].user);
  

      this.user={
        name:images[i].user,
        userImageURL:images[i].userImageURL
      }

      this.users.push(this.user);
     

    }

    console.log(this.users);

    this.users = [...new Set(this.users)];
    console.log("SET");
    console.log(this.users);
    
  } 
}

interface IUser{
  name:string,
  userImageURL:string
}
