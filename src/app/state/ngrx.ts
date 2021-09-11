import { Action, createAction, createReducer, on, props } from "@ngrx/store";

enum ActionType {
  Increment = 'Increment',
  Decrement = 'Decrement'
}

export class Decrement implements Action {
  readonly type = ActionType.Decrement
}

export class Increment implements Action {
  readonly type = ActionType.Increment
}
// export const increment = createAction(ActionType.Increment, props<{ payload: any }>())
// export const decrement = createAction(ActionType.Decrement, props<{ payload: any }>())

export const increment = createAction(ActionType.Increment)
export const decrement = createAction(ActionType.Decrement)

const INITIAL_STATE = {
  counter: 0
}

export const reducer = createReducer(INITIAL_STATE,
  on(increment, state => ({
  ...state, counter: state.counter + 1
  })),
  on(decrement, state =>({
    ...state, counter: state.counter - 1
  }))
)

// export const reducer = (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case ActionType.Decrement:
//       return { ...state, counter: state.counter - 1 }
//     case ActionType.Increment:
//       return { ...state, counter: state.counter + action.payload }
//     default:
//       return state
//   }
// }
