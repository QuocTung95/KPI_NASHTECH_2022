import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {actions as actionReducers} from '../slice/communication'
import actionThunks from '../thunk/communication'
import {
    getData,
    getLoading
  } from '../selector/communication'
import { useAppDispatch } from '../hooks';


const useCommunication = () => {
    const dispatch = useAppDispatch()
    const data = useSelector(getData)
    const loading = useSelector(getLoading)
    const actions = useMemo(() => bindActionCreators({...actionThunks, ...actionReducers}, dispatch), [])
    return useMemo(() => ({
      actions,
      data,
      loading,
    }), [actions, data, loading])
};

export default useCommunication;