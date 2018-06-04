import { Clinica } from './../Clinica';
import { ClinicasService } from './../clinicas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {

  rec() {
    const checar = localStorage.getItem("Clinicas");
    if (checar) {
      this.listaClinicas.clinicas = JSON.parse(checar);
      localStorage.setItem("Clinicas", JSON.stringify(this.listaClinicas.clinicas));
      return this.listaClinicas.clinicas;
    }
  }
  deletar(id){
    if (confirm('Você Realmente deseja deletar esse Serviço?')){
      if (id === 0) {
        this.listaClinicas.clinicas.shift();
      } else if(id === this.listaClinicas.clinicas.length -1 ) {
        this.listaClinicas.clinicas.pop();
      } else {
        let auxIni = this.listaClinicas.clinicas.slice(0, id);
        let auxFim = this.listaClinicas.clinicas.slice(id + 1);
        this.listaClinicas.clinicas = auxIni.concat(auxFim);
      }
      localStorage.setItem("Clinicas", JSON.stringify(this.listaClinicas.clinicas));
      return this.listaClinicas.clinicas;
    }
  }
  //gera uma instancia do Serviço da Lista de CLinicas que fica na memoria inicializa o Array e Copia o Array para a lista local
  constructor(private listaClinicas: ClinicasService) {
    this.listaClinicas.clinicas.push({ nome: "exemplo", qtd: 1 });
    this.rec();
    //this.listaClinicas.consultarClinica('22E37A2D-C3EB-42C7-B4C3-1A09B78D2DC0'); //<- esse metodo pode ser usado para consultar a clinica.
  }
  //Carrega os elementos quando o DOM é Carregado
  ngOnInit() {}
}
