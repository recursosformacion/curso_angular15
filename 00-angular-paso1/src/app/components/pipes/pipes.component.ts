import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

  private numerico: number = 12345.6;
  private cadena: string = "Esto es cadena";
  private fecha : Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
