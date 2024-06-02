import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';
import { MainComponent } from './main/main.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component'



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    ArticleComponent,
    MainComponent,
    HamburgerMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
