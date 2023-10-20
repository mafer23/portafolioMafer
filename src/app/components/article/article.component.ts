import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  carouselItems = [
    {
      title: 'Ecommerce PowerFit',
      description: 'Here are Angular, Java, Spring-boot',
      imageUrl: './../../../../assets/img/power-fit.jpg',
      githubLink: 'https://github.com/mafer23/nocountry-project-powerfit-c12',
      youtubeLink: 'https://www.youtube.com/watch?v=EX0xPCaD2nw&ab_channel=maferpalencia'
    },
    {
      title: 'Diseño de Landing Page de un restaurante',
      description: 'Here are HTML Y CSS',
      imageUrl: './../../../../assets/img/restaurante.jpg',
      githubLink: 'https://mafer23.github.io/Dise-oRestaurante.github.io/'
    }
    // Add more items as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
