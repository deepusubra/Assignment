import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL=environment.apiurl;
const API_KEY=environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {


  currentArticle:any;
  constructor(private http: HttpClient) {
  }

  getData(url:String):Observable<any>{
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }

}
