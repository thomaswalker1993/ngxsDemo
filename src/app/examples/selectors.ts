import { SimpleAnimalsState } from './../simple-store/simple-store.component';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

export class selectors {

  @Select(SimpleAnimalsState.animal) animals$: Observable<string>;

  constructor(private store: Store) {

  }
}
