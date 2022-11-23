import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {CommunicationSentenceseService} from '../../services'

export const fetchList = createAsyncThunk(
    'communication/fetch',
    async () => {
      const response = await CommunicationSentenceseService.getAll()
      return response.data
    }
  )

  export default {
    fetchList,
  }