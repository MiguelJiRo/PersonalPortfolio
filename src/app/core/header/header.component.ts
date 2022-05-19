import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../service/global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lenguageEN: boolean = false;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    console.log(this.globalService.getLenguageStorage());
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

  public changeLenguage() {
    // console.log((<HTMLInputElement>document.getElementById("selectlenguage")).value);
    this.globalService.setLenguageStorage((<HTMLInputElement>document.getElementById("selectlenguage")).value);
    // console.log(this.globalService.getLenguageStorage());
    window.location.reload();
  }

}
