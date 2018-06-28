import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-hijo',
  templateUrl: './form-array-hijo.component.html',
  styleUrls: ['./form-array-hijo.component.scss']
})
export class FormArrayHijoComponent implements OnInit {

  @Input() formElement: FormGroup

  @Output() data: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.formElement = this.fb.group({
    //   propiedad2: '',
    //   nuevoArray: this.fb.array([])
    // })
  }

  crearElemento() {
    return this.fb.group({
      numero: '',
      fuente: '',
      valor2: ''
    })
  }

  get propiedad2() {
    return this.formElement.get('propiedad2')
  }

  get nuevoArray() {
    return this.formElement.get('nuevoArray') as FormArray
  }

  agregarElemento() {
    this.nuevoArray.push(this.crearElemento())
  }

  enviarData() {
    this.data.emit(this.formElement)
  }
}
