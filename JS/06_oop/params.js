function Point (param) {
    this.x = param.x
    this.y = param.y
    this.r = param.r
    this.calcularCircunf = function () {},
    this.calcularCirculo = function () {},
    this.calcularOtro = function () {},
    this.calcularOtroMás = function () {}
}

p1 = new Point ( {x:2, y:3, r:5})
p1.calcularOtro()
p1.calcularCirculo ()