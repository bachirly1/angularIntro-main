import { Component } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.css']
})
export class TempConverterComponent {


  premierNombre: number = 0;
  deuxiemeNombre: number = 0;
  Resultat: number= 0;

  addition()  {
    this.Resultat = this.premierNombre + this.deuxiemeNombre;


  }
  Soustraction() {
    this.Resultat = this.premierNombre - this.deuxiemeNombre;

  }
  Division() {
    this.Resultat = this.premierNombre / this.deuxiemeNombre;

  }
  Multiplication() {
    this.Resultat = this.premierNombre * this.deuxiemeNombre;

  }

}
