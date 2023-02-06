import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message:string = '';
  constructor() { }
add(mensagem:string){
this.message = mensagem;

setTimeout(() => {
  this.clear();
}, 4000);
}


clear(){
  this.message = '';
}
}
