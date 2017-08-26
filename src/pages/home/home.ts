import { Component } from '@angular/core';
import { GithubProvider} from '../../providers/github/github';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  info: any = {};

  constructor(private _github: GithubProvider) {

  }

  dojo(username)
  {
    console.log("DOJO IONIC!");
    this._github.buscarUsuario(username).then((data)=>{
      this.info = data;
      console.log(this.info);
    })

  }

}
