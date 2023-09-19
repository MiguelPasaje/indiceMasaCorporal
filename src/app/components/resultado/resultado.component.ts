import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi:number = 0;
  resultado:string;
  interpretacion:string;

  constructor(private route:ActivatedRoute){
    this.resultado = ''
    this.interpretacion = ''

    // console.log(route.snapshot.paramMap.get('valor'));
    // this.bmi = +route.snapshot.paramMap.get('valor')!;
    const valueParam = route.snapshot.paramMap.get('valor');
    this.bmi = valueParam ? +valueParam:0;

  }

  ngOnInit():void {
    this.getRusultado()
  }

  getRusultado(){
    if (this.bmi >= 25) {
      this.resultado = 'Exceso de peso'
      this.interpretacion = 'tienes un peso corporal superior al normal. intente hacer mas ejercicio'
    }else if (this.bmi >= 18.5) {
      this.resultado = 'Peso Normal'
      this.interpretacion = 'tienes un peso corporal normal. ¡Excelente!'
    }else{
      this.resultado = 'Peso Bajo'
      this.interpretacion = 'tienes un peso corporal mas bajo de lo normal. puedes comer un poco mas'
    }
  }

}
