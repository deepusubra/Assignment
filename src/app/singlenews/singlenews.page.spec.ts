import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleNewsPage } from './singlenews.page';

describe('Tab2Page', () => {
  let component: SingleNewsPage;
  let fixture: ComponentFixture<SingleNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleNewsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
