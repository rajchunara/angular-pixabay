import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
    searchText:string='';
    amount:number=16;
    apiUrl:string='https://pixabay.com/api';
    apiKey:string='10235189-f5b0b900563689e4a004e7a81';
    images;

    sidebarImage:string='';
    private sidebarTopic = new BehaviorSubject<string>("");
    currentSidebarTopic = this.sidebarTopic.asObservable();

  constructor(private http: HttpClient) { }

  getImagesService():Observable<any>{
    this.images = this.http.get(`${this.apiUrl}/?key=${this.apiKey}&q=${this.searchText}
    &image_type=photo&per_page=${this.amount}&safesearch=true`);
    return this.images;
  }

  getImagesByName(imageName):Observable<any>{
    this.images = this.http.get(`${this.apiUrl}/?key=${this.apiKey}&q=${imageName}
    &image_type=photo&per_page=${this.amount}&safesearch=true`);
    return this.images;
  }

  setSidebarTopic(topic: string){
    this.sidebarTopic.next(topic);
  }

  

  setSidebarImage(sidebarImage){
    
    this.sidebarImage = sidebarImage;
    console.log(this.sidebarImage);
  }

  

  getSidebarImage():string{
    return this.sidebarImage;
  }


  
}
