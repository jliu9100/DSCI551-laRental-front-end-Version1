import React, {Component} from 'react'
import {
    Card,
    Table,
    Button,
    Tag,
    Form,
    Input,
    Col,
    Checkbox,
    Row,
    Space
} from 'antd'

import { SearchOutlined } from '@ant-design/icons';
import LinkButton from '../../components/link-button/link-button';
import {PlusCircleOutlined} from '@ant-design/icons';
import api from '../../api';
import testData from '../../data/dev_test_json_4tuples';

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

export default class Info extends Component {

    
  state={
        information: [],
        dataSource: testData,
        searchText: '',
        searchedColumn: '',
        hyperlinkTo: 'http://www.baidu.com'}

  getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                this.setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex,
                });
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select(), 100);
        }
      },
      render: text =>
          (
          text
        ),
    });
  
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  redirect = (HouseObj) =>{
    console.log(HouseObj)
    const w=window.open('about:blank');
    w.location.href = "/mate?"+ HouseObj.addrline1;
  }
  // getFireBaseObj =  () =>{

  //     // try {
  //     //     const data = await api.get('/result.json?orderBy="$key"&limitToFirst=15')
  //     // } catch (error) {      
  //     // }
  //         api.get('/result.json?orderBy="$key"&limitToFirst=15').then(response=>{
  //         localStorage.setItem('firebaseObj',JSON.stringify(response.data))
  //         // console.log([JSON.parse(localStorage.getItem('firebaseObj'))][0])
  //         this.setState({dataSource:[JSON.parse(localStorage.getItem('firebaseObj'))][0]})
          
  //         localStorage.removeItem("firebaseObj");
          
  //     })
      
      
  // }

    

  initColumns = () => {
      
        this.columns = [

          {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
              ...this.getColumnSearchProps('address'),
          },
          {
              title: 'Amenities',
              dataIndex: 'amenities',
              key: 'amenities',
              render: tags => (
                  <>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      if (tag.includes('Washer') || tag.includes('Air Conditioning')||
                      tag.includes('Dryer')
                      ) {
                        color = 'green';
                        return (
                          <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                          </Tag>
                        );
                      }
                      else {
                          color = 'red';
                          return (
                            <Tag color={color} key={tag}>
                              {tag.toUpperCase()}
                            </Tag>
                          );
                        }
                    })}
                  </>
                ),
          },

          {
              title: 'Price',
              dataIndex: 'rental_price',
              key: 'rental_price',
              sorter: (a, b) => a.rental_price - b.rental_price,
          },
          {
              title: 'Action',
              width: 300,
              dataIndex:'',
              render: (HouseObj)=> (<span>
                  <LinkButton onClick = {()=>{this.redirect(HouseObj)}}>FindRoommate</LinkButton>
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
        const { dataSource} = this.state;
        //搜索框实现
        const onFinish = async(values) => {
            try {              
                const data = await api.get(
                    '/house',{params:
                    {
                        'addr' : values.address,
                        'distRange': values.distRange,
                        'priceRange': values.lprice + ',' + values.hprice,
                        'amenities': values.amenities.toString()
                    }}
                );
                const data_front_format = []
                for (var i=0;i<data.data.data.length;i++)
                    { 
                        const each_obj = {"address":data.data.data[i].location.formattedAddr, 
                        "amenities":data.data.data[i].amenities, 
                        "rental_price":data.data.data[i].rental_price,
                        }
                        data_front_format.push(each_obj)
                    }
                
                this.setState({dataSource:data_front_format})
            } catch (error) {      
                console.log('error!!')    
            }
          };
         
        // const onFinishFailed = (errorInfo) => {
        //     console.log('Failed:', errorInfo);
        //     };
    
        const extra = (
            <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            // loading={loadings[1]}
            // onClick={}
            
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
                                value="Washer"
                                style={{
                                lineHeight: '32px',
                                }}
                            >
                                Washer
                            </Checkbox>
                            </Col>
                            <Col span={20}>
                            <Checkbox
                                value="Air Conditioning"
                                style={{
                                
                                lineHeight: '32px',
                                }}
                                // disabled
                            >
                                Air Conditioning
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
                    >
                        
                    {({ getFieldValue }) =>
                        null
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
                <Table 
                className='info-table' 
                dataSource={dataSource} 
                columns={this.columns} 
                rowKey="addrline1"
                expandable={{
                  // onExpand: 
                  expandedRowRender: record => <p style={{ margin: 0 }}>{"Roommate：0/3, click Button on the right to FindRoommate!"}</p>,
                  rowExpandable: record => record.addrline1 !== 'Not Expandable',
                }}
                />;
            </Card>
        )
    }
}