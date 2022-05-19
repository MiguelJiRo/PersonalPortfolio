import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../core/header/header.module';
import { PagesComponent } from './pages.component';
import { FooterModule } from '../core/footer/footer.module';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        PagesComponent,
        ExperienceComponent,
        AboutComponent,
        WorkComponent,
        ContactComponent,
        HomeComponent
    ],
    exports: [

    ],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        FooterModule
    ]
})
export class PagesModule { }
