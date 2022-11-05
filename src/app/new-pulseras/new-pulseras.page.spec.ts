import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPulserasPage } from './new-pulseras.page';

describe('NewPulserasPage', () => {
  let component: NewPulserasPage;
  let fixture: ComponentFixture<NewPulserasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPulserasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPulserasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
