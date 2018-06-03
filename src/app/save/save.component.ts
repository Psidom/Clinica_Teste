import { ClinicasService } from './../clinicas.service';
import { Clinica } from './../Clinica';
import { Component, OnInit, NgModule, Input } from '@angular/core';

@Component({
  selector: "app-save",
  templateUrl: "./save.component.html",
  styleUrls: ["./save.component.css"]
})
export class SaveComponent implements OnInit {
  clinicas: Array<Clinica>;

  minha: Clinica = {
    nome: " ",
    qtd: 0
  };

  add() {
    let rede = Object.assign({}, this.minha);
    this.clinicas.push(rede);
    localStorage.setItem("Clinicas", JSON.stringify(this.clinicas));
  }
  //recebe uma instancia do Serviço de Clinicas que fica na memoria e copia o Array para uma Variavel Local
  constructor(private listaClinicas: ClinicasService) {
    this.clinicas = this.listaClinicas.clinicas;
  }

  ngOnInit() {}

}
