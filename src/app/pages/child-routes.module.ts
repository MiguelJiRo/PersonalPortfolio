import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent, data: { titulo: 'Intro' } },
  { path: 'about', component: AboutComponent, data: { titulo: 'About' } },
  { path: 'experience', component: ExperienceComponent, data: { titulo: 'Experience' } },
  { path: 'work', component: WorkComponent, data: { titulo: 'Work' } },
  { path: 'contact', component: ContactComponent, data: { titulo: 'Contact' } },
  { path: '404', component: NopagefoundComponent },
  { path: '**', redirectTo: '/404' }
]

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
