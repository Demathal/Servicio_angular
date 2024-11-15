import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { PruebaService } from '../../servicio/prueba/prueba.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
//Instanciar en una variable el formulario reactivo
formularioForm;
//FIN Instanciar en una variable el formulario reactivo
//Crear un constructor: Esto permita inicializar variables con atributos y valores
constructor(private formBuilder: FormBuilder, private pruebaSrv:PruebaService){
  this.formularioForm = this.formBuilder.group({
    nombre: '',
    apellido: ''
  });
} 
//FIN Crear un constructor: Esto permita inicializar variables con atributos y valores

//Creamos un programa principal al cargar la web. Este se ejecuta al momento de cargar la página Web
ngOnInit() {
  console.log("hola");
}
//Fin programa principal

enviarDatos(){
  //Podemos crear una variable donde almacenaremos los datos capturados (opcional)
  let datos_formulario = this.formularioForm.value;
  //Fin variable datos formulario

  //Imprimir por consola los datos capturados en la variable
  console.log(datos_formulario);
  console.warn('Los datos capturados son:', this.formularioForm.value);
  this.formularioForm.reset();
  
  //Fin imprimir por consola
}
activar_invocable1(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_1();
  console.log(dato_desde_servicio)
}
activar_invocable2(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_2();
  console.log(dato_desde_servicio)
}
activar_invocable3(){
  let dato_desde_servicio;
  dato_desde_servicio = this.pruebaSrv.invocable_3();
  console.log(dato_desde_servicio)
}
activar_sumar(){
  let datos_recibidos_servicio = this.pruebaSrv.sumar(5);
  console.log(datos_recibidos_servicio);
}
activar_promedio(){
  let datos_recibidos_servicio:number;
  datos_recibidos_servicio = this.pruebaSrv.promedio(1,6);

  if(datos_recibidos_servicio > 4){
      console.log("aprobaste con un promedio: "+datos_recibidos_servicio);
    }else if(datos_recibidos_servicio == 4){
      console.log("aprobaste con promedio minimo"+datos_recibidos_servicio);
    } else[
      console.log("Reprobaste con promedio"+datos_recibidos_servicio)
    ]
}

}