import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso-desarrollo',
  templateUrl: './curso-desarrollo.component.html',
  styleUrls: ['./curso-desarrollo.component.scss']
})
export class CursoDesarrolloComponent implements OnInit {

  @Input() data: any

  constructor() { }

  ngOnInit() {
  }

}
