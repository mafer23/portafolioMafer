import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component'



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
