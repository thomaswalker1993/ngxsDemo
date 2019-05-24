// import { BiggerStoreAnimalStateModel } from './../bigger-store/bigger-store.component';
// import { AddAnimal, SimpleAnimalStateModel } from '../simple-store/simple-store.component';
// import { Store, Action, StateContext } from '@ngxs/store';
// import { ArraysAnimalStateModel } from '../store-arrays/store-arrays.component';
// import { patch, append, removeItem, updateItem } from '@ngxs/store/operators';


// export class DispatchingActions {

//   constructor(private store: Store) {}

//   // Actions are functions which allow you to "modify" the state
//   // This is a state with one string and the method below sets the state to the value inputted
//   // to the dispatched action
//   @Action(AddAnimal)
//   setSimpleStore(ctx: StateContext<SimpleAnimalStateModel>, action: AddAnimal) {
//     ctx.setState({
//       animal: action.name
//     });
//   }

//   // This action utilises the spread operator to add a new value to an array property
//   @Action(AddAnimal)
//   setStoreSpread(ctx: StateContext<ArraysAnimalStateModel>, action: AddAnimal) {
//     const state = ctx.getState();
//     ctx.setState({
//       animal: [...state.animal, action.name]
//     });
//   }

//   // This action does the same as the above but using a more complicated state model
//   // We assign the place to equal state.place so we only modify the target animal property
//   @Action(AddAnimal)
//   setBiggerStore(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     const state = ctx.getState();
//     ctx.setState({
//       animal: [...state.animal, action.name],
//       place: state.place
//     });
//   }

//   // We dont always have to define each property and assign the same value to it
//   // We can use the aforementioned spread operator to say "Keep the whole state the same
//   // apart from the property we explicitly mention"
//   @Action(AddAnimal)
//   setBiggerStoreSpread(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     const state = ctx.getState();
//     ctx.setState({
//       ...state,
//       place: action.name
//     });
//   }

//   // Patch state is another method supplied by ngxs which does the job of the spread operator
//   // above and just patches the property that you supply
//   @Action(AddAnimal)
//   setBiggerStorePatch(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     ctx.patchState({
//       place: action.name
//     });
//   }

//   // Append also does the job of the spread operator allowing you to add values to an array
//   @Action(AddAnimal)
//   appendOperator(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     ctx.setState(
//       patch({
//         animal: append([action.name])
//       })
//     );
//   }

//   // NGXS supplies state operators which make life much easier and the first one removes an item
//   // from an array where the statement returns true inside the brackets. This should only be used
//   // on fields which have unique values per item to avoid accidentally removing multiple items
//   @Action(AddAnimal)
//   removeItemOperator(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     ctx.setState(
//       patch({
//         animal: removeItem<string>(name => name === action.name)
//       })
//     );
//   }

//   // Update item does the same as above but updates instead of removes
//   @Action(AddAnimal)
//   updateItemOperator(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     ctx.setState(
//       patch({
//         animal: updateItem<string>(name => name === action.name, 'NewName')
//       })
//     );
//   }

//   // You can also chain actions to enable saving everytime something is updated or
//   // updating a separate state
//   @Action(AddAnimal)
//   updaeItemOperator(ctx: StateContext<BiggerStoreAnimalStateModel>, action: AddAnimal) {
//     ctx.setState(
//       patch({
//         animal: updateItem<string>(name => name === action.name, 'NewName')
//       })
//     );

//     this.store.dispatch(new AddAnimal('Bear'));
//   }
// }
