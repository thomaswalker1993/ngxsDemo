import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { SimpleAnimalsState, SimpleAnimalStateModel } from '../simple-store/simple-store.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selector-two',
  templateUrl: './selector-two.component.html',
  styleUrls: ['./selector-two.component.scss']
})
export class SelectorTwoComponent implements OnInit {

  @Select(SimpleAnimalsState.animal) animalState$: Observable<SimpleAnimalStateModel>;

  constructor() { }

  ngOnInit() {
  }

}
