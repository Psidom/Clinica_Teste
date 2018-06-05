import { ClinicasService } from './../clinicas.service';
import { Clinica } from './../Clinica';
import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: "app-save",
  templateUrl: "./save.component.html",
  styleUrls: ["./save.component.css"]
})
export class SaveComponent implements OnInit {

  minha: Clinica = {
    title: '',
    start: '',
    end: ''
  };

  add() {
    let rede = Object.assign({}, this.minha);
    this.listaClinicas.clinicas.push(rede);
    localStorage.setItem("Clinicas", JSON.stringify(this.listaClinicas.clinicas));
  }

  //recebe uma instancia do Serviço de Clinicas que fica na memoria e copia o Array para uma Variavel Local
  constructor(private listaClinicas: ClinicasService) {

  }

  ngOnInit() {}
}
