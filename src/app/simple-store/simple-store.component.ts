import { Component, OnInit } from '@angular/core';
import { StateContext, Action, Store, State, Selector } from '@ngxs/store';


// First define the model of your state
export class SimpleAnimalStateModel {
  animal: string;
}

// Then define the name of the state the model that it adheres to and the default values
@State<SimpleAnimalStateModel>({
  name: 'animals',
  defaults: {
    animal: ''
  }
})

// All actions that you use above need to be defined with any parameters included in the constructor
export class AddAnimal {
  static readonly type = '[Animal] Add Animal';
  constructor(public name: string) {}
}

// This class describes what you can do with that state
export class SimpleAnimalsState {

  // This selector allows your components to get a stream of data from your state
  // (This is the bit which will make the information "auto-update" on the page)
  @Selector()
  static animal(state: SimpleAnimalStateModel) {
    return state.animal;
  }

  // Actions are functions which allow you to "modify" the state
  @Action(AddAnimal)
  addAnimal(ctx: StateContext<SimpleAnimalStateModel>, action: AddAnimal) {
    ctx.setState({
      animal: action.name
    });
  }

}

@Component({
  selector: 'app-simple-store',
  templateUrl: './simple-store.component.html',
  styleUrls: ['./simple-store.component.scss']
})
export class SimpleStoreComponent {

  constructor(private store: Store) {}

  // To call an action we inject the store in the constructor of our component
  // and then dispatch a new instance of the action
  addAnimal(name: string) {
    this.store.dispatch(new AddAnimal(name));
  }
}





