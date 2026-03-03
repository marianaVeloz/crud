import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutItem } from './put-item';

describe('PutItem', () => {
  let component: PutItem;
  let fixture: ComponentFixture<PutItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
