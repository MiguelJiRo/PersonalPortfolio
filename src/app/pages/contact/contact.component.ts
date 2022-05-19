import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public lenguageEN: boolean = false;
  public email: string = 'migueljiroz@gmail.com';

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
