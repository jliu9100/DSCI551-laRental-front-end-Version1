import React, {Component} from 'react'
import {
    Card,
    Table,
    Button,
    Tag,
    Space
} from 'antd'
import LinkButton from '../../components/link-button/link-button';
import {PlusCircleOutlined} from '@ant-design/icons';
import testData from "../../data/dev_test_json_4tuples.js"
import api from '../../api';
import ajax from '../../api/ajax';
import { responsiveArray } from 'antd/lib/_util/responsiveObserve';






export default class Info extends Component {
    
    state={
        information: [],
        dataSource: []}

    
    getFireBaseObj = () =>{
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

    render() {
        const title = 'Rental Intro'
        const { dataSource } = this.state;
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
                <Table className='info-table' dataSource={dataSource} columns={this.columns} />;
            </Card>
        )
    }
}