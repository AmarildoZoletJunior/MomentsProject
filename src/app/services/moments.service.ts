import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams, HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { Post } from '../Interface/Post';
import { Observable } from 'rxjs';
import { RootObject } from '../Interface/Upload';
import {Geral,Geral2} from '../Interface/ResponseGet';



@Injectable({
  providedIn: 'root'
})
export class MomentsService {
ApiUrl: string = 'http://localhost:1337/api/'

  constructor(private http: HttpClient) { }
  CadastrarMoment(moment:FormData): Observable<Post>{
    return this.http.post<Post>(this.ApiUrl + 'posts',moment);
  }

  EditarMoment(id:number,moment:FormData): Observable<Geral2>{
    return this.http.put<Geral2>(this.ApiUrl + 'posts/' + id ,moment);
  }

  AdicionarImagem(fileteste: FormData): Observable<RootObject[]>{
    return this.http.post<RootObject[]>(this.ApiUrl + 'upload',fileteste,{observe: 'body'});
  };

  getMoments(): Observable<Geral>{
    return this.http.get<Geral>(this.ApiUrl + 'posts' + '?populate=*');
  }
  getMoment(id:number): Observable<Geral2>{
    return this.http.get<Geral2>(this.ApiUrl + 'posts/' + id + '?populate=*');
  }
  DeleteMoment(id:number): Observable<HttpResponse<HttpStatusCode>>{
    return this.http.delete<HttpStatusCode>(this.ApiUrl + 'posts/' + id,{observe: 'response'});
  }
}

