import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'singlenews.page.html',
  styleUrls: ['singlenews.page.scss']
})
export class SingleNewsPage implements OnInit{

  article:any;
  ngOnInit(): void {

   this.article=this.news.currentArticle;
   console.log(  this.article);
  }

  constructor(private news:NewsServiceService) {}

}
