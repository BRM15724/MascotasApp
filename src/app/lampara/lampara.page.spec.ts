import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LamparaPage } from './lampara.page';

describe('LamparaPage', () => {
  let component: LamparaPage;
  let fixture: ComponentFixture<LamparaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamparaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LamparaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
