import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentsService } from 'src/app/services/moments.service';
import { Dat, Geral2 } from '../../../Interface/ResponseGet'

@Component({
  selector: 'app-one-moment',
  templateUrl: './one-moment.component.html',
  styleUrls: ['./one-moment.component.css']
})
export class OneMomentComponent implements OnInit {
  Moment!: Dat;
  BaseUrlApi = 'http://localhost:1337';
  Id!: number;
  constructor(private router: Router,private message: MessagesService,private route: ActivatedRoute, private Service: MomentsService) { }

  ngOnInit(): void {
    this.getMoment();
  }

  getMoment() {
    this.Id = Number(this.route.snapshot.paramMap.get('id'));
    this.Service.getMoment(this.Id).subscribe((x: Geral2) => {
      x.data.attributes.DataPostagem = new Date(x.data.attributes.DataPostagem).toLocaleDateString('pt-BR');
      this.Moment = x.data;
      console.log(this.Moment)
    })
  }
  DeletarComponente() {
    let prompt = window.confirm("Deseja mesmo excluir esta postagem?");

    if (prompt) {
      this.Service.DeleteMoment(this.Id).subscribe(x => {
        if (x.status == 200) {
            this.message.add('Este momento foi excluido com sucesso.');
            this.router.navigate(['/home']);
        }
        this.message.add('Ocorreu um erro para excluir este momento.')
      })

    }

  }
}
