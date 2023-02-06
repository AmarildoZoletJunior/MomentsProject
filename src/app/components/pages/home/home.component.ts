import { Component, OnInit } from '@angular/core';
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
  BaseUrlApi = 'http://localhost:1337/api/'



  constructor(private momentService: MomentsService) {
  }
  ngOnInit(): void {
    this.momentService.getMoments().subscribe((item: Geral) => {
      item.data.forEach(x => {
        x.attributes.DataPostagem = new Date(x.attributes.DataPostagem).toLocaleDateString('pt-BR')
      });
      this.allMoments = item.data;
      this.moments = item.data;
    });
  }

}
