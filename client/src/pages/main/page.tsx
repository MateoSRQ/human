import React, {useEffect} from 'react';
import style from './style.module.css';
import { RiHome2Fill, RiUser2Fill } from "react-icons/ri";
import {Space, Button} from 'antd';
import 'antd/dist/antd.css';
import Profile from "../profile/page";

interface Props {
    content?: string
}


function Main(props: Props) {
    // const status = useSelector(getStatus);
    // const isLoading = useSelector(getLoading);
    let content = null;

    if (props.content) {
        switch (props.content) {
            case 'profile':
                content = <Profile />
                break;
            default:
                content = null;
        }
    }

    return (
        <div className={style.component}>
            <div className={style.container}>
                <div className={style.content}>
                    {content}
                </div>
                <div className={style.dock} style={{textAlign: 'center'}}>
                    <div className={style.docker} >
                        <div className={style.dockItem}>
                            <RiHome2Fill size={24} color={'#efefef'}/>
                        </div>
                        <div className={style.dockItem}>
                            <RiUser2Fill size={24} color={'#aaa'}/>
                        </div>
                        <div className={style.dockItem}>
                            <RiHome2Fill size={24} color={'#efefef'}/>
                        </div>
                        <div className={style.dockItem}>
                            <RiUser2Fill size={24} color={'#efefef'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
