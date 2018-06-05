import { Clinica } from './Clinica';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: "root"
})
export class ClinicasService {
  clinicas: Array<Clinica> = [];

  constructor(private http: Http) {}

  consultarClinica(inst_id: string) {
    this.http
      .get(
        `https://apps.saudevianet.com.br:88/api/instituicao/carregarDadosPublicosInstituicao?inst_id=${inst_id}`
      )
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }
  //Lista as  agendas online configuradas  e as primeiras disponibilidades de horários de uma clínica
  listarAgendamento(
    inst_id: string,
    espe_id: string = "todos",
    agen_id: string,
    agda_id?: string
  ) {
    this.http
      // tslint:disable-next-line:max-line-length
      .get(`https://apps.saudevianet.com.br/api/agendamento/listarAgendasOnline?inst_id=${inst_id}&espe_id=${espe_id}&agen_id=${agen_id}&agda_id=${agda_id}`)
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
