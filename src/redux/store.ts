import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import communicationSentencesReducer from './slice/communication'


const rootReducer = combineReducers({
  communicationSentences: communicationSentencesReducer
})

export const setupStore: any = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']