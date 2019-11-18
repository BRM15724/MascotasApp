import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalizadoPage } from './localizado.page';

describe('LocalizadoPage', () => {
  let component: LocalizadoPage;
  let fixture: ComponentFixture<LocalizadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
