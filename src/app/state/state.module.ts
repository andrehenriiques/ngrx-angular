import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { StoreModule } from '@ngrx/store';
import { reducer as counterReducer } from './ngrx';

@NgModule({
  declarations: [
    StateComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    StoreModule.forRoot({
      counterReducer
    })
  ]
})
export class StateModule { }
