import { Component } from '@angular/core';
import { LoaderService } from './service/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loaderService: LoaderService) {
  }

  public showLoader(): void {
    this.loaderService.showLoader();
  }
}
