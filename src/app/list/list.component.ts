import { Clinica } from './../Clinica';
import { ClinicasService } from './../clinicas.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import * as moment from 'moment';
import { locale } from 'fullcalendar';

//declare var $: any;
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
      localStorage.setItem(
        "Clinicas",
        JSON.stringify(this.listaClinicas.clinicas)
      );
      return this.listaClinicas.clinicas;
    }
  }

  deletar(id) {
    if (confirm("Você Realmente deseja deletar Essa Consulta?")) {
      if (id === 0) {
        this.listaClinicas.clinicas.shift();
      } else if (id === this.listaClinicas.clinicas.length - 1) {
        this.listaClinicas.clinicas.pop();
      } else {
        let auxIni = this.listaClinicas.clinicas.slice(0, id);
        let auxFim = this.listaClinicas.clinicas.slice(id + 1);
        this.listaClinicas.clinicas = auxIni.concat(auxFim);
      }
      localStorage.setItem(
        "Clinicas",
        JSON.stringify(this.listaClinicas.clinicas)
      );
      return this.listaClinicas.clinicas;
    }
  }
  //gera uma instancia do Serviço da Lista de CLinicas que fica na memoria inicializa o Array e Copia o Array para a lista local
  constructor(private listaClinicas: ClinicasService) {
    this.listaClinicas.clinicas.push({
      title: "Meu Primeiro Compromisso",
      start: "2018-06-05T12:30:00",
      end: "2018-06-05T15:30:00"
    });
    this.rec();
    //sthis.listaClinicas.consultarClinica('22E37A2D-C3EB-42C7-B4C3-1A09B78D2DC0'); //<- esse metodo pode ser usado para consultar a clinica.
  }
  //Carrega os elementos quando o DOM é Carregado
  ngOnInit() {
    const lista = this.listaClinicas.clinicas;
    const agenda = new Document();
    $(agenda).ready(function() {
      $("#agenda").fullCalendar({
        locale: "pt-br",
        header: {
          left: "prev,today,next",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        buttonText: {
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista'
        },
        events: JSON.parse(localStorage.getItem("Clinicas")),
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
          if (confirm('Você quer realmente esse dia')) {
            const inicio = moment(start).format("YYYY-MM-DD HH:mm");
            const fim = moment(end).format("YYYY-MM-DD HH:mm");
            const nome = prompt("Digite um Nome Para Sua Consulta");
            const dados: Clinica = {
              title: nome,
              start: inicio,
              end: fim
            };
            if(nome){
            let rede = Object.assign({}, dados);
            lista.push(rede);
            localStorage.setItem(
              "Clinicas",
              JSON.stringify(lista)
            );

            $("#agenda").fullCalendar('renderEvent', dados, true);
            alert('Compromisso realizado com Sucesso');
            }
        }


        }
      });
    });
    this.listaClinicas.clinicas = lista;
  }
}
