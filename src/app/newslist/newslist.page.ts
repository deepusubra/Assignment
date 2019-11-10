import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'newslist.page.html',
  styleUrls: ['newslist.page.scss']
})
export class NewsListPage implements OnInit {
  
  data:any;
  page=1
  ngOnInit(){

    this.news.getData(`top-headlines?country=us&pageSize=5&page=${this.page}`).subscribe(data =>{
    this.data=data; 
    })
  }

  constructor(private news:NewsServiceService,private router:Router) {}

  onGoToNewsSinglePage(article:any){
   this.news.currentArticle=article;
/*    this.router.navigate(['tabs','singlenews']);
 */
this.router.navigate(['./singlenews']);
  }

  loadData(event){
    this.page++;
    this.news.getData(`top-headlines?country=us&pageSize=5&page=${this.page}`)
    .subscribe(
      data =>{
        for(const article of data.articles){
          this.data.articles.push(article);
        }
        event.target.complete();
  })


  }

}
