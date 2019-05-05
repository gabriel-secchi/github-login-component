import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'
import { HttpClientModule } from '@angular/common/http';

import { GithubLoginComponent } from './github-login.component';

import { GithubLoginService } from './github-login.service';

@NgModule({
  declarations: [
    GithubLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    GithubLoginService
  ],
  //bootstrap: [ GithubLoginComponent ]
  entryComponents: [ GithubLoginComponent ]
})
export class AppModule {
  //custom NgModule

  constructor(private injector: Injector) {
    // Aqui estamos instanciando um novo  custom element
    const component = createCustomElement(GithubLoginComponent, { injector })

    // o objeto customElements fica disponível globalmente quando injetamos o custom elemts na aplicação
    customElements.define('comp-github-login', component)
  }

  // Como removemos o componente do bootstrap padrao da aplicação, precisamos implemetar este metodo de callback
  ngDoBootstrap(){}
}
