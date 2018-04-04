function factura (empresa, cliente, compra, total) {
    this.empresa = nombre, direccion, telefono, NIF
    this.cliente = nombre, apellidos, direccion, telefono, DNI
    this.compra = producto, uds, peso, pesototal, precio
    this.total = total, IVA, pago
    this.mostrarReferencia = function () {
        let ref = this.empresa + ', '
        ref += ','+ this.cliente + ', '
        ref += this.compra + ', ' + this.total + ', '
        return ref
    }
}
    
    /*function empresa(nombre, dirección, telefono, NIF,){
    }

    function cliente (nombre, apellidos, direccion, telefono, DNI){
    }

    function compra (producto, uds, peso, pesototal, precio){
    }

    function total (total, IVA, pago){
    }*/

    let empresa = new factura (
        'El Corte Inglés',
        'San Sebastián de los Reyes, 3',
        '914 302 779',
        '885705492-0'
    )
    console.log(empresa.mostrarReferencia())

    let cliente = new factura (
        'Pepe',
        'Pérez',
        'Calle Sombrerería, 22',
        '78 443 110',
        '770592348i'
    )
    console.log(cliente.mostrarReferencia())

    let compra = new factura (
        'cepillos de dientes',
        '2500',
        '13g',
        '32500',
        '0,25'
    )
    console.log(compra.mostrarReferencia())

    let total = new factura (
        '645€',
        '4%',
        'Cheque'
    )
    console.log(total.mostrarReferencia())





