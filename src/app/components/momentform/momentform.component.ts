import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Interface from '../../Interface/Post';
import { Geral2 } from 'src/app/Interface/ResponseGet';
import { MomentsService } from 'src/app/services/moments.service';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Post } from '../../Interface/Post';

@Component({
  selector: 'app-momentform',
  templateUrl: './momentform.component.html',
  styleUrls: ['./momentform.component.css']
})
export class MomentformComponent implements OnInit {
@Input() btnText!:string
@Output() onSubmit = new EventEmitter<Interface.Post>()
@Input() momentData:Geral2 | null = null;
momentform!: FormGroup


  ngOnInit():void{
    this.momentform = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.data.id : ''),
      Titulo: new FormControl(this.momentData ? this.momentData.data.attributes.Titulo : '',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      Descricao: new FormControl(this.momentData ? this.momentData.data.attributes.Descricao : '',[Validators.required,Validators.minLength(3),Validators.maxLength(500000)]),
      AutorPostagem: new FormControl(this.momentData ? this.momentData.data.attributes.AutorPostagem : '',[Validators.required,Validators.minLength(3)]),
      imagem: new FormControl('')
    })
  }
  
  get Titulo(){
    return this.momentform.get('Titulo')!;
  }
  get Descricao(){
    return this.momentform.get('Descricao')!;
  }
  get imagem(){
    return this.momentform.get('imagem')!;
  }
  get AutorPostagem(){
    return this.momentform.get('AutorPostagem')!;
  }
constructor(){
}
 async submit(){
    if(this.momentform.invalid){
      return;
    }
    console.log(this.momentform.value)
    this.onSubmit.emit(this.momentform.value)
  }

  OnFileSelect(event: any){
    const file:File = event.target.files[0];
    this.momentform.patchValue({imagem: file});
  }

  

}
