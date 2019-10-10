import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
    searchText:string='';
    amount:number=15;
    apiUrl:string='https://pixabay.com/api';
    apiKey:string='10235189-f5b0b900563689e4a004e7a81';
    images;

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

  
}
