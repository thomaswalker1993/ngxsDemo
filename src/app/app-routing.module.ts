import { StoreArraysComponent } from './store-arrays/store-arrays.component';
import { BiggerStoreComponent } from './bigger-store/bigger-store.component';
import { SimpleStoreComponent } from './simple-store/simple-store.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectorsComponent } from './selectors/selectors.component';
import { SelectorTwoComponent } from './selector-two/selector-two.component';

const routes: Routes = [
  { path: '', component: SimpleStoreComponent },
  { path: 'simpleAnimalStore', component: SimpleStoreComponent },
  { path: 'arraysAnimalStore', component: StoreArraysComponent },
  { path: 'biggerAnimalStore', component: BiggerStoreComponent },
  { path: 'selectors', component: SelectorsComponent },
  { path: 'selectorTwo', component: SelectorTwoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
