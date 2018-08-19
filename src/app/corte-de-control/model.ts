
export class ModeloRowset {
    header: any
    data: Modelo
}

export class Modelo {
    rowset: ModeloRow[]
}

export class ModeloRow {
    codcan: string
    moneda: string
    opera: string
    precio: string
    plazo: string
}



export class Canal {
    nombre: string
    preciosCompra: Precio[]
    preciosVenta: Precio[]
    precios: Precio[]

    constructor(nombre: string) { 
        this.nombre = nombre
        this.preciosCompra = [] 
        this.preciosVenta = []
        this.precios = []
    }

    agregarGeneral(nuevo: Precio) {
        this.precios.push(nuevo)
    }

    agregarPrecio(nuevo: Precio) {
        switch(nuevo.operacion) {
            case 'C':
                this.preciosCompra.push(nuevo)
            break
            case 'V':
                this.preciosVenta.push(nuevo)
            break
            // case 'T':
            //     this.preciosCompra.push(nuevo)
            //     this.preciosVenta.push(nuevo)
            // break
        }
    }
}

export class Precio {

    moneda: string
    operacion: string
    plazo: string
    precio: string
    precioCompra: string
    precioVenta: string

    constructor(moneda: string, operacion: string, plazo: string, precio: string) {
        this.moneda = moneda
        this.plazo = plazo
        this.precio = precio
        this.operacion = operacion
    }
}