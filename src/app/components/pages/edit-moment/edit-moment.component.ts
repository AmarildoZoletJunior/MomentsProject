import { Component, OnInit } from '@angular/core';
import { Geral2, Dat } from '../../../Interface/ResponseGet';
import { MomentsService } from 'src/app/services/moments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Post } from 'src/app/Interface/Post';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent implements OnInit {

  moment!: Geral2;
  btnText: string = 'Editar';

  constructor(private rota: Router,private service: MomentsService, private route: ActivatedRoute,private message: MessagesService) {
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getMoment(id).subscribe(x => {
      this.moment = x;
    });
  }

  async EditarMoment(moment:Post) {
    const id = this.moment.data.id;
    if (moment.imagem) {
      const form = new FormData();
      form.append("files", moment.imagem, moment.imagem.name);

      await this.service.AdicionarImagem(form).subscribe(x => {
        let number;
        number = x[0].id
        const form = new FormData();
        const data = {
          "AutorPostagem":moment.AutorPostagem,
          "DataPostagem": Date.now(),
          "Descricao": moment.Descricao,
          "Titulo": moment.Titulo,
          "ImagemPost": String(number)
        }
        console.log(data)
        form.append("data", JSON.stringify(data));
        this.service.EditarMoment(this.moment.data.id, form).subscribe(x => console.log(x));
        this.message.add("Momento editado com sucesso!");
        this.rota.navigate(['/home']);
      })
    }

      const formulario = new FormData();
      const data = {
        "AutorPostagem": moment.AutorPostagem,
        "DataPostagem": Date.now(),
        "Descricao": moment.Descricao,
        "Titulo": moment.Titulo
      }
      console.log(data,moment.id)
      formulario.append("data", JSON.stringify(data));
      this.service.EditarMoment(this.moment.data.id, formulario).subscribe(x => console.log(x));
      this.message.add("Momento editado com sucesso!");
      this.rota.navigate(['/home']);
  }
}
