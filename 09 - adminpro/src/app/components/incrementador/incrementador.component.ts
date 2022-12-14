import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit , AfterViewInit {

  @ViewChild('txtProgress', { static: false}) txtProgress: ElementRef;

  @ViewChild('cabe', { static: true}) vh3 : ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.vh3.nativeElement.innerHTML);
    this.vh3.nativeElement.innerHTML = "Esto lo he cambiado";
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.progreso = 100;
    }else if ( newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }

}
