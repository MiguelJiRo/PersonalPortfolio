import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public email: string = 'migueljiroz@gmail.com';
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
