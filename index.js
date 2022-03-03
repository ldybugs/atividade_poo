class Retangulo{
  constructor(altura, largura){
   this.altura= altura;
   this.largura= largura;
  }

  calcularArea(){
    return this.altura*this.largura
  }

  area(){
    return this.calcularArea()
  }
}

let retangulo_1  = new Retangulo(35, 60);
console.log (retangulo_1.calcularArea());
console.log (retangulo_1.area());
let retangulo_2 = new Retangulo(60, 60);
console.log (retangulo_2.calcularArea());
console.log (retangulo_2.area());
