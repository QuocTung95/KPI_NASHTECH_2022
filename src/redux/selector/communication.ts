import type { RootState } from '../store'

export const getData = (state: RootState) => state.communicationSentences.data
export const getLoading = (state: RootState) => state.communicationSentences.loading
