import { ImageService } from './../../services/image-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})



export class UserViewComponent implements OnInit {
  images=[];
  usersMap:Map<string, string>= new Map<string,string>();
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
      //We are pushing user name as key and image url as value in Map
      //If user name is repeated then it will not be pushed to Map as user.name is key
      //and keys do not repeat in Map
      this.usersMap.set(this.user.name, this.user.userImageURL);
    }

    this.usersMap.forEach((key, value)=>{
      this.users.push({name:value, userImageURL:key});
    })

    this.usersMap.clear();
  } 
}

interface IUser{
  name:string,
  userImageURL:string
}
