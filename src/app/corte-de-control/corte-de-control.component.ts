import { Component, OnInit } from '@angular/core';
import { EmulacionService } from './emulacion.service';
import { ModeloRow, Canal, Precio, Modelo } from './model';

@Component({
  selector: 'app-corte-de-control',
  templateUrl: './corte-de-control.component.html',
  styleUrls: ['./corte-de-control.component.scss']
})
export class CorteDeControlComponent implements OnInit {

  constructor(private service: EmulacionService) { }

  ngOnInit() {
    this.service.getData().then(resp => this.acomodarInfo(resp.data.rowset))
  }


  acomodarInfo(rowset: ModeloRow[]) {
    let i = 0
    while(i < rowset.length) {
      let canalAnterior = rowset[i].codcan
      let canal: Canal = new Canal(canalAnterior)
      while(i < rowset.length && canalAnterior == rowset[i].codcan) {
        let operacionAnterior = rowset[i].opera
        while(i < rowset.length && canalAnterior == rowset[i].codcan && operacionAnterior == rowset[i].opera) {
          let monedaAnterior = rowset[i].moneda
          while(i < rowset.length && canalAnterior == rowset[i].codcan && 
            operacionAnterior == rowset[i].opera && monedaAnterior == rowset[i].moneda) {
              let precio: Precio = new Precio(monedaAnterior, operacionAnterior, rowset[i].plazo,rowset[i].precio)
              canal.agregarPrecio(precio)
              i++
          }
        }
      }
      this.normalizarArray(canal)
      console.log("ORDENADO", canal)
    }
    
  }


  normalizarArray(canal: Canal) {
    let c = 0
    let v = 0
    while(c < canal.preciosCompra.length && v < canal.preciosVenta.length) {
      if(canal.preciosCompra[c].moneda == canal.preciosVenta[v].moneda) {
        if(canal.preciosCompra[c].plazo <= canal.preciosVenta[v].plazo) {
          canal.precios.push(new Precio(canal.preciosCompra[c].moneda, canal.preciosCompra[c].operacion, canal.preciosCompra[c].plazo, canal.preciosCompra[c].precio))
        } else {
          canal.precios.push(new Precio(canal.preciosVenta[v].moneda, canal.preciosVenta[v].operacion, canal.preciosVenta[v].plazo, canal.preciosVenta[v].precio))
        }
      } else {
        //monedas distintas
      }
      c++
      v++
    }
  }
}
