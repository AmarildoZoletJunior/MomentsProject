import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Post } from '../Interface/Post';
import { Observable } from 'rxjs';
import { Attributes,RootObject } from '../Interface/teste';
@Injectable({
  providedIn: 'root'
})
export class MomentsService {
ApiUrl: string = 'http://localhost:1337/api/posts'

  constructor(private http: HttpClient) { }
  CadastrarMoment(moment:FormData): Observable<FormData>{
    return this.http.post<FormData>(this.ApiUrl,moment);
  }

  teste(): Observable<Post>{
    return this.http.get<Post>(this.ApiUrl + '/' + 1 + '?populate=*');
  }

  AdicionarImagem(fileteste: FormData): Observable<HttpResponse<HttpStatusCode>>{
   return this.http.post<HttpStatusCode>("http://localhost:1337/api/upload",fileteste,{observe: 'response'});
  };

}

