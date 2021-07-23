import React, {useEffect} from 'react';
import style from './style.module.css';
import Loader from '../../components/loader/component';
import {useDispatch, useSelector } from "react-redux";
import { getStatus, getLoading, startApp } from '../../store/features/appSlice';

import Main from '../main/page';

function App() {
    const status = useSelector(getStatus);
    const isLoading = useSelector(getLoading);
    const dispatch = useDispatch();

    let content = null;
    switch (status) {
        case 'idle':
            break;
        case 'verifyAuthentication':
            break;
        case 'authenticated':
            content = <Main content='profile'/>
            break;
        case 'notAuthenticated':
            content = <Main />
            break;
    }

    useEffect(() => {
        if (status === 'idle') {
            dispatch(startApp());
        }
    }, [status])

    return (
        <div className={style.component}>
            <Loader size={128} visible={isLoading} />
            {content}
        </div>
    );
}

export default App;
