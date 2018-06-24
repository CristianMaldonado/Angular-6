import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-otro-curso',
  templateUrl: './otro-curso.component.html',
  styleUrls: ['./otro-curso.component.scss']
})
export class OtroCursoComponent implements OnInit {

  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
