import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global/global.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    // this.globalService.setLenguageStorage('ES');
  }

}
