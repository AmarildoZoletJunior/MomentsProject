import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { Post } from '../Interface/Post';
import { Observable } from 'rxjs';
import { RootObject } from '../Interface/teste';

@Injectable({
  providedIn: 'root'
})
export class MomentsService {
ApiUrl: string = 'http://localhost:1337/api/posts'

  constructor(private http: HttpClient) { }
  CadastrarMoment(moment:FormData): Observable<Post>{
    return this.http.post<Post>(this.ApiUrl,moment);
  }

  teste(): Observable<Post>{
    return this.http.get<Post>(this.ApiUrl + '/' + 1 + '?populate=*');
  }

  AdicionarImagem(fileteste: FormData): Observable<RootObject[]>{
    return this.http.post<RootObject[]>("http://localhost:1337/api/upload",fileteste,{observe: 'body'});
  };

}

