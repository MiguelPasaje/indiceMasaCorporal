import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad:number = 25;
  peso:number = 60;
  altura:number = 170
  sexo:string = 'masculino';

  constructor(private router:Router) {}

  cabiarAltura(event:any){
    this.altura = event.target.value;
  }
  femenino(){
    this.sexo = 'femenino'
  }
  masculino(){
    this.sexo = 'masculino'
  }
  calcularBMI(){

    const BMI =  this.peso / Math.pow(this.altura/100,2)

    this.router.navigate(['/resultado',BMI.toFixed(2)])
  }
}

