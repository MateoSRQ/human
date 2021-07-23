import {Form, Input} from "antd";
import React from "react";

function QuestionTextItem(props: any) {
    console.log('rules')
    console.log(props.rules);

    return (
        <Form.Item
            name={props.name}
            label={props.label}
            //rules={props.rules}
            rules={[{ required: true, message: 'Please input your password!' }]}
            key={props.name}
        >
            <Input size='large' placeholder={props.placeholder}/>
        </Form.Item>
    )
}

export default QuestionTextItem;