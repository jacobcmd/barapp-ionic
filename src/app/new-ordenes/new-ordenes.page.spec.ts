import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewOrdenesPage } from './new-ordenes.page';

describe('NewOrdenesPage', () => {
  let component: NewOrdenesPage;
  let fixture: ComponentFixture<NewOrdenesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrdenesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewOrdenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
