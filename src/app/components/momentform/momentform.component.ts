import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as Interface from '../../Interface/Post';
import { MomentsService } from 'src/app/services/moments.service';

import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-momentform',
  templateUrl: './momentform.component.html',
  styleUrls: ['./momentform.component.css']
})
export class MomentformComponent implements OnInit {
  @Input() btnText!:string
@Output() onSubmit = new EventEmitter<Interface.Post>()
  momentform!: FormGroup
  momentFile!:File;
  ngOnInit():void{
    this.momentform = new FormGroup({
      id: new FormControl(''),
      Titulo: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]),
      Descricao: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(800)]),
      AutorPostagem: new FormControl('',[Validators.required,Validators.minLength(3)]),
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
constructor(private serviceMoments:MomentsService){
}
 async submit(){
    if(this.momentform.invalid){
      return;
    }

    this.onSubmit.emit(this.momentform.value)
  }

  OnFileSelect(event: any){
    const file:File = event.target.files[0];
    // this.momentFile = file;
    this.momentform.patchValue({imagem: file});
  }

  

}
