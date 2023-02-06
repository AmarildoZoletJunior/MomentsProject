import { Component } from '@angular/core';
import { Route, Router} from '@angular/router';
import { Post } from 'src/app/Interface/Post';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentsService } from 'src/app/services/moments.service';


@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {
  btnText = 'Compartilhar';
  statusa!:any;
  constructor(private serviceMoments:MomentsService,private message:MessagesService,private rota:Router){
  }

  async CreateHandler(moment: Post){

    const formu = new FormData();
    formu.append("files",moment.imagem,moment.imagem.name);

   await this.serviceMoments.AdicionarImagem(formu).subscribe(x =>{
    let number;
    number = x[0].id
    const form = new FormData();
    const data = {
        "AutorPostagem": moment.AutorPostagem,
       "DataPostagem": Date.now(),
       "Descricao": moment.Descricao,
       "Titulo": moment.Titulo,
       "ImagemPost": String(number)
      }
      console.log(data)

  form.append("data",JSON.stringify(data));
 this.serviceMoments.CadastrarMoment(form).subscribe(x => console.log(x));
  this.message.add("Momento adicionado com sucesso!");
  this.rota.navigate(['/home']);
   });
  }




}
