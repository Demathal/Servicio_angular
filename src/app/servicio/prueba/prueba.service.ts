import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor(private http:HttpClient) { }
  
  invocable_1(){
    let dato="funcion 1 invocada";
    return dato;
  }

  invocable_2(){
    let dato="funcion 2 invocada";
    return dato;
  }

  invocable_3(){
    let dato="funcion 3 invocada";
    return dato;
  }
sumar(numero:any) {
  let dato=4
  let total= 0;
  total = dato + numero;
  return total;
}
promedio(nota1:number ,nota2:number){
  let promedio:number;
  promedio =(nota1 + nota2)/2;
  return promedio;

}
}
