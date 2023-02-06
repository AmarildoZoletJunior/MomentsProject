import { HttpResponse, HttpResponseBase, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { Post } from 'src/app/Interface/Post';
import { RootObject } from 'src/app/Interface/teste';
import { MomentsService } from 'src/app/services/moments.service';


@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {
  btnText = 'Compartilhar';
  statusa!:any;
  constructor(private serviceMoments:MomentsService){
  }

  async CreateHandler(moment: Post){
    const formu = new FormData();
    formu.append("files",moment.imagem,moment.imagem.name);

   this.serviceMoments.AdicionarImagem(formu).subscribe(x => console.log(x.body?.forEach(x => {
    console.log(x.json)
   })));
    const form = new FormData();
    console.log(moment.imagem);




    const data = {
        "AutorPostagem": moment.AutorPostagem,
       "DataPostagem": Date.now(),
       "Descricao": moment.Descricao,
       "Titulo": moment.Titulo
      }


    //   form.append("files",moment.ImagemPost);
    // this.serviceMoments.AdicionarImagem(form).subscribe();



  //   form.append("data",JSON.stringify(data))
  // form.append("files.ImagemPost",JSON.stringify(imagem));

  //   this.serviceMoments.CadastrarMoment(form).subscribe();
  }


  testinho!:any;
  async TrazerNoticia(){
    this.serviceMoments.teste().subscribe(x => {this.testinho = x});
    setTimeout((x:any) =>{
      console.log(this.testinho)
    },2500)
 
  }

}
