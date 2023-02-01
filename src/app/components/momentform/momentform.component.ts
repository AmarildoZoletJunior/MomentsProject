import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-momentform',
  templateUrl: './momentform.component.html',
  styleUrls: ['./momentform.component.css']
})
export class MomentformComponent {
  @Input() btnText!:string
}
