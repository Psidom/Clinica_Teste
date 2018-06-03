import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCarrega]'
})
export class CarregaDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML = 'dasdsadasd';
    //atribuir um valor ao html marcado com o seltor
   }
   @Input()
   appCarrega: Array<any>;
   //escuta a variavel appCarrega

  @HostListener('click')
  carregando() {
    alert('Ola Fui Clicado');
  }
  //Carrega a função quando o elemento marcado for clicado
}
