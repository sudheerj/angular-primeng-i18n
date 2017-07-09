import { Component } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {


  framework: string;

  gender: string= 'm';

  items: MenuItem[];

  activeIndex: number = 0;

  angular: number = 5;

  ngOnInit() {
    this.items = [
      {label: 'Showcase', icon: 'fa-briefcase', url: 'https://www.primefaces.org/primeng/'},
      {label: 'Github', icon: 'fa-github-square', url: 'https://github.com/primefaces/primeng'},
      {label: 'Forum', icon: 'fa-forumbee', url: 'https://forum.primefaces.org/viewforum.php?f=35'},
    ];
  }

  /*onChangeStep(label: string) {
    this.msgs.length = 0;
    this.msgs.push({severity: 'info', summary: label});
  }*/
}

