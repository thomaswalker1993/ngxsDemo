import { Component, OnInit } from '@angular/core';
import { State, Action, Store, StateContext } from '@ngxs/store';

@Component({
  selector: 'app-store-arrays',
  templateUrl: './store-arrays.component.html',
  styleUrls: ['./store-arrays.component.scss']
})
export class StoreArraysComponent {

  constructor(private store: Store) {}

  addArrayAnimal(name: string) {
    this.store.dispatch(new AddArrayAnimal(name));
  }
}

export class AddArrayAnimal {
  static readonly type = '[ArrayAnimal] Add Animal';
  constructor(public name: string) {}
}

export class ArraysAnimalStateModel {
  animal: string[];
}

@State<ArraysAnimalStateModel>({
  name: 'arraysAnimal',
  defaults: {
    animal: []
  }
})
export class ArraysAnimalsState {

  @Action(AddArrayAnimal)
  addArrayAnimal(ctx: StateContext<ArraysAnimalStateModel>, action: AddArrayAnimal) {
    const state = ctx.getState();

    // This setState utilises the spread operator (...). This essentially says the following:
    // Set animal = the current state.animal and then append the action.name to the end
    ctx.setState({
      animal: [...state.animal, action.name]
    });
  }

}
