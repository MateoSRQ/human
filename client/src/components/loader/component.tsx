import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import style from './style.module.css';

interface Props {
    children?: React.ReactNode
    size: number,
    visible?: boolean
}

function Component(props: Props) {
    return (
        <div className={style.component}>
            {props.children}
            <div className={style.loader} style={{display: props.visible?'flex':'none'}}>
                <Spin indicator={<LoadingOutlined style={{ fontSize: props.size }} spin />} />,
            </div>
        </div>
    );
}

export default Component;
