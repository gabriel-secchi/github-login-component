import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { GithubUser } from './github-user.model';
import { GithubLoginService } from './github-login.service';

@Component({
  selector: 'comp-github-login',
  templateUrl: './github-login.component.html',
  styleUrls: ['./github-login.component.css']
})
export class GithubLoginComponent {
  @Output() usuarioLogado = new EventEmitter<GithubUser>()

  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  githubUser: GithubUser

  constructor(private githubLoginService: GithubLoginService) { }

  ngOnInit() {
  }

  githubLogin() {
    this.githubLoginService
    .login(this.email.nativeElement.value, this.password.nativeElement.value)
    .subscribe(
      githubUser => this.setUser(githubUser),
      response => {
        this.setUser(undefined)
        alert(`Erro ${response.status};\n${response.error.message}`)
      }
    )
  }

  setUser(user: GithubUser) {
    this.githubUser = user
    this.usuarioLogado.emit(this.githubUser)
  }

}
