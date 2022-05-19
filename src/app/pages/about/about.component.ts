import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public lenguageEN: boolean = false;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    if (this.globalService.getLenguageStorage() === 'EN') {
      console.log('EN lenguage active');
      (<HTMLInputElement>document.getElementById("selectlenguage")).value = 'EN';
      this.lenguageEN = true;
    }
    else if (this.globalService.getLenguageStorage() === 'ES') {
      console.log('ES lenguage active');
      (<HTMLInputElement>document.getElementById("selectlenguage")).value = 'ES';
      this.lenguageEN = false;
    }
  }

}
