import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setOnlineStatus } from '../utils/slices/configSlice';

const useOnlineStatus = () => {
    const dispatch = useDispatch();

    const onlinehandler = () => {
        dispatch(setOnlineStatus("online"));
    }

    const offlinehandler = () => {
        dispatch(setOnlineStatus("offline"));
    }

    useEffect(() => {
        window.addEventListener("online", onlinehandler);
        window.addEventListener("offline", offlinehandler);

        return () => {
            window.removeEventListener("online", onlinehandler);
            window.removeEventListener("offline", offlinehandler);
        }
        
    }, [])

  return null;
}

export default useOnlineStatus