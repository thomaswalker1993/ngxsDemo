import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SimpleAnimalsState, SimpleAnimalStateModel, AddAnimal } from '../simple-store/simple-store.component';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent {

  constructor(private store: Store) {}

  @Select(SimpleAnimalsState.animal) animalState$: Observable<SimpleAnimalStateModel>;

  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
  }

}
