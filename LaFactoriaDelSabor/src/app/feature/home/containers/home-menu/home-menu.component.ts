import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  idiom = 'Español';

  constructor( public translate: TranslateService) { 
    translate.addLangs(['Ingles', 'Español']);
    translate.setDefaultLang('Español');
    translate.use(this.idiom);
  }

  ngOnInit(): void {
  }

  switchLang = (lang: string) => {

    if(lang !== 'Español'){
      this.idiom = 'Ingles';
      this.translate.use(this.idiom);
    } else {
      this.idiom = 'Español';
      this.translate.use(this.idiom);
    }


  }
}
