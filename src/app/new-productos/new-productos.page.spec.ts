import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProductosPage } from './new-productos.page';

describe('NewProductosPage', () => {
  let component: NewProductosPage;
  let fixture: ComponentFixture<NewProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
