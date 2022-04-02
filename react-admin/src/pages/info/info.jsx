import React, {Component} from 'react'
import {
    Card,
    Table,
    Button,
    Tag,
    Space,
    Form,
    Input,
    Radio   ,
    Select,
    Col,
    Checkbox,
    Row
} from 'antd'

import LinkButton from '../../components/link-button/link-button';
import {PlusCircleOutlined} from '@ant-design/icons';
import testData from "../../data/dev_test_json_4tuples.js"
import api from '../../api';
import axios from 'axios';
import ajax from '../../api/ajax';
import { responsiveArray } from 'antd/lib/_util/responsiveObserve';
import { FormInstance } from 'antd/es/form';




const { Option } = Select;
const layout = {
    labelCol: {
        span:2,
    },
    wrapperCol: {
        span: 5,
    },
  };
const tailLayout = {
    wrapperCol: {
      offset: 2,
    },
  };
const priceLayout = {

    wrapperCol: {
      span:5,
    },
  };
export default class Info extends Component {
    
    state={
        information: [],
        dataSource: []}

    
    getFireBaseObj =  () =>{

        // try {
        //     const data = await api.get('/result.json?orderBy="$key"&limitToFirst=15')
        // } catch (error) {      
        // }
            api.get('/result.json?orderBy="$key"&limitToFirst=15').then(response=>{
            localStorage.setItem('firebaseObj',JSON.stringify(response.data))
            // console.log([JSON.parse(localStorage.getItem('firebaseObj'))][0])
            this.setState({dataSource:[JSON.parse(localStorage.getItem('firebaseObj'))][0]})
            
            localStorage.removeItem("firebaseObj");
            
        })
        
        
    }

    

    initColumns = () => {
        this.columns = [
            // {
            //   title:'No.',
            //   dataIndex:'uid',
            //   key:'uid'
            // },
            {
                title: 'AddressLine1',
                dataIndex: 'addrline1',
                key: 'addrline1'
            },
            {
                title: 'AddressLine2',
                dataIndex: 'addrline2',
                key: 'addrline2',
                filters: [
                        {
                          text: 'Encino',
                          value: 'Encino',
                        },
                        {
                          text: 'Northridge',
                          value: 'Northridge',
                        },
                      ],
                    filterMode: 'tree',
                    filterSearch: true,
                    onFilter: (value, record) => record.addrline2.includes(value),
                    width: '30%',
                    //   onFilter: (value, record) => record.addrline2.indexOf(value) === 0
            },
            // {
            //     title: 'Amenities',
            //     dataIndex: 'amenities',
            //     key: 'amenities',
            //     render: tags => (
            //         <>
            //           {tags.map(tag => {
            //             let color = tag.length > 5 ? 'geekblue' : 'green';
            //             if (tag.includes('Washer') || tag.includes('Air Conditioning')||
            //             tag.includes('Dryer')
            //             ) {
            //               color = 'green';
            //               return (
            //                 <Tag color={color} key={tag}>
            //                   {tag.toUpperCase()}
            //                 </Tag>
            //               );
            //             }
            //             else {
            //                 color = 'red';
            //                 return (
            //                   <Tag color={color} key={tag}>
            //                     {tag.toUpperCase()}
            //                   </Tag>
            //                 );
            //               }
            //           })}
            //         </>
            //       ),
            // },
        
            {
                title: 'House Type',
                dataIndex: 'house_info',
                key: 'house-info'
                
            },
            {
                title: 'Price',
                dataIndex: 'rental_price',
                key: 'rental_price',
                // sorter: (a, b) => a.rental_price - b.rental_price
                sorter: (a, b) => a.rental_price - b.rental_price,
                // sorter: (a, b) => Number(a.rental_price.substring(1)) - Number(b.rental_price.substring(1)),
            },
            {
                title: 'Action',
                width: 300,
                dataIndex:'',
                render: ()=> (<span>
                    <LinkButton>ShowMore</LinkButton>
                    <LinkButton>SourceWeb</LinkButton>
                    </span>)
                
            }
        
        
        ]
        
        
    }

    componentWillMount(){
        this.initColumns();

    }
    componentDidMount(){
        
    }

    formRef = React.createRef();
    
    onReset = () => {
    this.formRef.current.resetFields();
    };

    render() {
        const title = 'Rental Intro'
        const { dataSource } = this.state;
        const onFinish = async(values) => {
            //搜索框实现
            console.log(typeof values.address)
            try {
                const b = '/house?addr=' + (values.address) + '&distRange=' + values.distRange +'&priceRange=' +values.lprice+ ','+ values.hprice + '&amenities=Washer,Air Conditioning';
                
                console.log(b);
                const data = await api.post((b))
                // const data = await api.post(
                //     '/house',{params:
                //     {
                //         'addr' : values.address,
                //         'distRange': values.distRange,
                //         'priceRange': values.lprice + ',' + values.hprice,
                //         'amenities': 'Washer'
                //     }}
                // );
                console.log(data);
            } catch (error) {      
                console.log('error!!')    
            }

            };
            
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
            };
    
        const extra = (
            <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            // loading={loadings[1]}
            onClick={this.getFireBaseObj}
            
          >
            <span>Updata from FireBase</span>
            </Button>
        )
        
        return (
            <Card title={title} extra={extra}>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={onFinish} onSubmit={this.handleSubmit}     >
                    <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                    <Input placeholder="Full Address"/>
                    </Form.Item>

                    <Form.Item
                    name="distRange"
                    label="Distance Range"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >   
                    <Input placeholder="Miles"/>
                    </Form.Item>

                    <Form.Item  label="Prices Range" style={{ marginBottom: 0 }} >
                        <Form.Item
                                name="lprice"

                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
                        >
                            <Input placeholder="Lowest Price"/>
                        </Form.Item>
                        <span
                            style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
                        >
                            -
                        </span>
                        <Form.Item 
                            name="hprice" 
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
                            <Input placeholder="Highest Price"/>
                        </Form.Item>
                        
                    </Form.Item>

                    <Form.Item
                    name="amenities"
                    label="Amenities"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >                  
                        <Checkbox.Group>
                        <Row>
                            <Col span={8}>
                            <Checkbox
                                value="A"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                A
                            </Checkbox>
                            </Col>
                            <Col span={8}>
                            <Checkbox
                                value="B"
                                style={{
                                lineHeight: '32px',
                                }}
                                // disabled
                            >
                                B
                            </Checkbox>
                            </Col>
                            <Col span={8}>
                            <Checkbox
                                value="C"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                C
                            </Checkbox>
                            </Col>
                            <Col span={8}>
                            <Checkbox
                                value="D"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                D
                            </Checkbox>
                            </Col>
                            <Col span={8}>
                            <Checkbox
                                value="E"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                E
                            </Checkbox>
                            </Col>
                            <Col span={8}>
                            <Checkbox
                                value="F"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                F
                            </Checkbox>
                            </Col>
                        </Row>
                        </Checkbox.Group>
                    </Form.Item>
                    <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                        <Form.Item
                            name="customizeGender"
                            label="Customize Gender"
                            rules={[
                            {
                                required: true,
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        ) : null
                    }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={this.onReset}>
                        Reset
                    </Button>
                    </Form.Item>
                </Form>
                <Table className='info-table' dataSource={dataSource} columns={this.columns} />;
            </Card>
        )
    }
}