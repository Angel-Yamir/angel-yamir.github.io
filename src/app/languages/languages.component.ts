import { Component } from '@angular/core';
import { LanguagesService } from "../../services/languages-service/languages.service";

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {
  constructor(public languagesService: LanguagesService){
    console.log(this.languagesService);
  }
}
