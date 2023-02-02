import { Component, Input, OnInit } from '@angular/core';
import * as Interface from '../../Interface/Post';

import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-momentform',
  templateUrl: './momentform.component.html',
  styleUrls: ['./momentform.component.css']
})
export class MomentformComponent implements OnInit {
  @Input() btnText!:string

  momentform!: FormGroup

  ngOnInit():void{
    this.momentform = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      descricao: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(800)]),
      imagem: new FormControl('',[Validators.required]),
      autor: new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }
  get titulo(){
    return this.momentform.get('titulo')!;
  }
  get descricao(){
    return this.momentform.get('descricao')!;
  }
  get imagem(){
    return this.momentform.get('imagem')!;
  }
  get autor(){
    return this.momentform.get('autor')!;
  }

  submit(){
    if(this.momentform.invalid){
      return;
    }
    console.log("Enviou o formulário")
  }
}
