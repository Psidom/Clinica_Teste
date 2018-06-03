import { Clinica } from './../Clinica';
import { ClinicasService } from './../clinicas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  clinicas: Array<Clinica>;

  rec() {
    const checar = localStorage.getItem("Clinicas");
    if (checar) {
      this.clinicas = JSON.parse(checar);
    }
  }
  //gera uma instancia do Serviço da Lista de CLinicas que fica na memoria inicializa o Array e Copia o Array para a lista local
  constructor(private listaClinicas: ClinicasService) {
    this.listaClinicas.clinicas.push({ nome: "exemplo", qtd: 1 });
    //this.listaClinicas.consultarClinica('22E37A2D-C3EB-42C7-B4C3-1A09B78D2DC0'); //<- esse metodo pode ser usado para consultar a clinica.
    this.clinicas = this.listaClinicas.clinicas;
  }
  //Carrega os elementos quando o DOM é Carregado
  ngOnInit() {
    this.rec();
  }
}
