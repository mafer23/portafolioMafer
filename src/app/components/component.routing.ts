import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'section',
    component: SectionComponent
  },
  
  {
    path: 'article',
    component: ArticleComponent
  },
 {
  path: 'main',
  component: MainComponent
 },
 
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class ComponentRoutingModule {}
