import React, {useEffect, useRef} from 'react';
import style from './style.module.css';
import Scrollbars from 'react-custom-scrollbars-2';
import {Typography} from 'antd';
import 'antd/dist/antd.css';
import {Form, Input, Button, Radio} from 'antd';
import { Steps,  message } from 'antd';
import { getSteps, getCurrentStep, getStepItems } from '../../store/features/profileSlice';
import {useSelector} from "react-redux";
import {getStatus} from "../../store/features/appSlice";
import QuestionTextItem from "./items/questionText";

const { Step } = Steps;
const {Title} = Typography;

function Profile() {
    const [form] = Form.useForm();
    const scroll = useRef(null)
    const profileSteps = useSelector(getSteps);
    const currentStep = useSelector(getCurrentStep);
    const items = useSelector(getStepItems);

    let steps = null;
    steps = profileSteps.map((item: any) => {
        console.log(item)
        return (
            <Step title={item.title} description={item.description}/>
        );
    });

    let cStep = profileSteps[currentStep];


    let stepItems = null;
    stepItems = items.map((item: any) => {
        switch (item.type) {
            case 'QuestionText':
                return (
                    <QuestionTextItem
                        label={item.text}
                        placeholder={item.text}
                        rules={item.rules}
                    />
                );
                break;
        }
    })


    const handleChange = (e: any) => {
        console.log(e);
    }

    const handleFinish = (values: any) => {
        console.log('finish');
        console.log(values)
    }

    const handleFinishFailed = () => {
        console.log('xyaz')
    }

    return (
        <div className={style.component}>
            <div className={style.mainContainer}>
                <Scrollbars ref={scroll}>
                    <div className={style.pageScroller}>
                        <div className={style.pageContainer}>
                            <Title level={2} >{cStep.title}</Title>
                            <Form
                                layout='vertical'
                                form={form}
                                id='tester'
                                onFinish={handleFinish}
                                onFinishFailed={handleFinishFailed}
                            >
                                {stepItems}

                                <Form.Item style={{textAlign: 'right'}}>
                                    <Button type="primary" htmlType="submit"  >Next</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Scrollbars>
            </div>
            <div className={style.rightSidebar}>
                <Steps direction="vertical" current={currentStep} onChange={handleChange}>
                    {steps}
                </Steps>
            </div>
        </div>
    );
}

export default Profile;
