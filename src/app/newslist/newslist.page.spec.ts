import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsListPage } from './newslist.page';

describe('Tab1Page', () => {
  let component: NewsListPage;
  let fixture: ComponentFixture<NewsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
