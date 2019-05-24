import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SimpleStoreComponent, SimpleAnimalsState } from './simple-store/simple-store.component';
import { StoreArraysComponent, ArraysAnimalsState } from './store-arrays/store-arrays.component';
import { BiggerStoreComponent, BiggerStoreAnimalsState } from './bigger-store/bigger-store.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { SelectorTwoComponent } from './selector-two/selector-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleStoreComponent,
    StoreArraysComponent,
    BiggerStoreComponent,
    SelectorsComponent,
    SelectorTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // This is where you state all of the states that you want to load up when the root module loads
    // forRoot([]) can be used here but generally you want to use forFeature([]) in each individal module
    // so that the states only load when that specific module is loaded
    NgxsModule.forRoot([
      SimpleAnimalsState,
      ArraysAnimalsState,
      BiggerStoreAnimalsState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
