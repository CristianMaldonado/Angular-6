import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-padre',
  templateUrl: './form-array-padre.component.html',
  styleUrls: ['./form-array-padre.component.scss']
})
export class FormArrayPadreComponent implements OnInit {

  formPadre: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formPadre = this.fb.group({
      propiedad: '',
      array: this.fb.array([])
    })
  }

  crearArrayNuevo() {
    return this.fb.group({
      propiedad2: '',
      nuevoArray: this.fb.array([])
    })
  }

  // crearElemento() {
  //   return this.fb.group({
  //     numero: '',
  //     fuente: '',
  //     valor2: ''
  //   })
  // }

  agregarArray() {
    this.array.push(this.crearArrayNuevo())
  }

  // agregarElemento(indice) {
  //   this.getNuevoArray(indice).push(this.crearElemento())
  // }

  get array() {
    return this.formPadre.get('array') as FormArray
  }


  // getNuevoArray(indice: number) {
  //   return this.array.at(indice).get('nuevoArray') as FormArray
  // }

  enviar(data: FormGroup) {    
    data.setParent(this.array)
    console.log("FORM PADRE", this.formPadre.value)
    console.log("FORM HIJO", data.value)
  }

}
