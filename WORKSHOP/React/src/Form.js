import React from 'react'
import { Rate } from 'antd';
import { Button, Form, Input, Card, InputNumber } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const { TextArea } = Input;

function ProForm() {
    const [form] = Form.useForm()
    
    const id = Form.useWatch("Id", form);
    const resuname = Form.useWatch("resname", form);
    const resdesc = Form.useWatch("resDesc", form);
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(2);
    const place = Form.useWatch("Place", form);
    const rating = Form.useWatch("Rating", form);
    
    function submit(e) {
        e.preventDefault();

        const data = {
            id: id,
            resname: resuname,
            popfood: resdesc,
            place:place,
            rating: rating
        }
        console.log(data);
        axios.post("http://localhost:8080/addRes",data)

    }

    return (
        <div>
            <center><h1 >Restaurant Details</h1></center>
            <Card style={{ backgroundColor: "lightblue", marginLeft: "300px", marginTop: "50px", marginRight: "300px" }}>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    form={form}
                    autoComplete="off"
                    action='POST'
                >
                    <Form.Item label="Restaurant ID" name="Id" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        label="Restaurant Name"
                        name="resname"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Place" name="Place">
                        <Input
                            type="text"
                            style={{
                                width: 100,
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="Popular Food" 
                    name="resDesc" rules={[
                        {
                            required: true,
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Rating"
                        name="Rating" rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Rate tooltips={desc} onChange={setValue} value={value} />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        name="submit"
                    >
                        <Button type="primary" htmlType="submit" onClick={submit} style={{ backgroundColor: "white", color: "Black" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
export default ProForm;