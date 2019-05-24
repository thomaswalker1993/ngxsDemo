import { Component, OnInit } from '@angular/core';
import { Store, State, StateContext, Action } from '@ngxs/store';

@Component({
  selector: 'app-bigger-store',
  templateUrl: './bigger-store.component.html',
  styleUrls: ['./bigger-store.component.scss']
})
export class BiggerStoreComponent {

  constructor(private store: Store) {}

  addBiggerStoreAnimal(name: string) {
    this.store.dispatch(new AddBiggerStoreAnimal(name));
  }

  updateBiggerStorePlace(name: string) {
    this.store.dispatch(new UpdateBiggerStorePlace(name));
  }

  updateBiggerStorePlacePatch(name: string) {
    this.store.dispatch(new UpdateBiggerStorePlacePatch(name));
  }

  exampleDispatchMultiple(name: string) {
    this.store.dispatch([
      new AddBiggerStoreAnimal(name),
      new UpdateBiggerStorePlace(name)
    ]);
  }
}

export class AddBiggerStoreAnimal {
  static readonly type = '[BiggerStoreAnimal] Add Animal';
  constructor(public name: string) {}
}

export class UpdateBiggerStorePlace {
  static readonly type = '[BiggerStoreAnimal] Update Place';
  constructor(public place: string) {}
}

export class UpdateBiggerStorePlacePatch {
  static readonly type = '[BiggerStoreAnimal] Update Place Patch';
  constructor(public place: string) {}
}


export class BiggerStoreAnimalStateModel {
  animal: string[];
  place: string;
}

@State<BiggerStoreAnimalStateModel>({
  name: 'biggerStoreAnimals',
  defaults: {
    animal: [],
    place: ''
  }
})

export class BiggerStoreAnimalsState {

  @Action(AddBiggerStoreAnimal)
  addBiggerStoreAnimal(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddBiggerStoreAnimal) {
    const state = ctx.getState();
    ctx.setState({
      animal: [...state.animal, action.name],
      place: state.place
    });
  }

  @Action(UpdateBiggerStorePlace)
  updateBiggerStorePlace(ctx: StateContext<BiggerStoreAnimalStateModel>, action: UpdateBiggerStorePlace) {
    const state = ctx.getState();
    ctx.setState({
      animal: state.animal,
      place: action.place
    });
  }

  @Action(UpdateBiggerStorePlacePatch)
  updateBiggerStorePlacePatch(ctx: StateContext<BiggerStoreAnimalStateModel>, action: UpdateBiggerStorePlacePatch) {
    // Patch state is the alternative to set state and makes the code cleaner when you
    // just want to modify parts of the state model
    ctx.patchState({
      place: action.place
    });
  }

}
