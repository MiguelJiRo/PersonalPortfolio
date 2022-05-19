import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../../service/loader/loader.service';
import { Loader } from '../../model/loader/loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public id: string = 'global';
  public show: boolean = true;

  constructor(private loaderService: LoaderService) {

  }

  public ngOnInit(): void {
    this.loaderService.hideLoader();
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = this.id === response.id && response.status;
    });
  }
}
