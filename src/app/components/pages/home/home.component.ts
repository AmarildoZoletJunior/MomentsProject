import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Geral, Dat } from 'src/app/Interface/ResponseGet';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments!: Dat[];
  moments!: Dat[];
  BaseUrlApi = 'http://localhost:1337';
  quantidadePosts!:number;
FaSearch = faSearch;



  constructor(private momentService: MomentsService) {
  }
  ngOnInit(): void {
  this.AtribuirValor();
  }

  AtribuirValor(){
    this.momentService.getMoments().subscribe((item: Geral) => {
      item.data.forEach(x => {
        x.attributes.DataPostagem = new Date(x.attributes.DataPostagem).toLocaleDateString('pt-BR')
      });
      this.allMoments = item.data;
      this.moments = item.data;
      this.quantidadePosts = this.moments.length;
      console.log(this.allMoments)
    });
  }

  BuscarMomento(e : Event){
    let inp = e.target as HTMLInputElement;
    let valor = inp.value;
    this.moments = this.allMoments.filter(x => x.attributes.Titulo.toLowerCase().includes(valor));
  }

}
