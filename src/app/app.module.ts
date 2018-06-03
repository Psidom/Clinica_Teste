import { ClinicasService } from './clinicas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { CarregaDirective } from './carrega.directive';
import { ListComponent } from './list/list.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SaveComponent,
    CarregaDirective,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClinicasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
