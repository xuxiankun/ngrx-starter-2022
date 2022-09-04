import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';
@Component({
  selector: 'anms-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsComponent implements OnInit, OnDestroy, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  count$ = new BehaviorSubject(0);
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {
	removeEventListener('mr-clean-counter', ((event: CustomEvent) => {}) as EventListener);
  }
  ngAfterViewInit() {
	addEventListener('mr-clean-counter', ((event: CustomEvent) => {
  	this.setCounter(event);
	}) as EventListener );
  }
  setCounter(event: CustomEvent) {
	this.count$.next(event?.detail?.counter);
}
  increment() {
	const current = this.count$.getValue() + 1;
	this.count$.next(current);
  }
}
