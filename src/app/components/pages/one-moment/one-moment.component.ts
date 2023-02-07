import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { MomentsService } from 'src/app/services/moments.service';
import {Dat, Geral2} from '../../../Interface/ResponseGet'

@Component({
  selector: 'app-one-moment',
  templateUrl: './one-moment.component.html',
  styleUrls: ['./one-moment.component.css']
})
export class OneMomentComponent implements OnInit{
Moment!: Dat;
BaseUrlApi = 'http://localhost:1337';

  constructor(private router: ActivatedRoute,private Service: MomentsService){}

  ngOnInit(): void {
  this.getMoment();
  }

  getMoment(){
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.Service.getMoment(id).subscribe((x:Geral2) => {
      x.data.attributes.DataPostagem = new Date(x.data.attributes.DataPostagem).toLocaleDateString('pt-BR');
      this.Moment = x.data;
      console.log(this.Moment)
    })
  }
}
