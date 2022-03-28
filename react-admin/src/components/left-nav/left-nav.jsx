import React, {Component} from "react";
import {Link} from 'react-router-dom'
import { Menu, Button } from 'antd';
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    LineChartOutlined,
    BarChartOutlined,
    DotChartOutlined,
    OrderedListOutlined,
    HomeTwoTone,
    MailOutlined,
  } from '@ant-design/icons';
import logo from '../../assets/images/SC.png'
import menuList from "../../config/menuConfig";

import './left-nav.less'


const SubMenu = Menu.SubMenu;
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

class LeftNav extends Component {
    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children){
                return(
                    <Menu.Item key={item.key} icon={item.icon}>
                            <Link to ={item.key}>
                                {item.title}
                            </Link>
                        </Menu.Item>    
                )
            }else{
                return(
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                        )
            }
            return
        })
    }

    
    render() {
        
        return (
            <div>
                <div className="left-nav">
                    
                    <Link to='/' className="left-nav-header">
                        <img src={logo} alt="logo"/>
                        <h1>LArental</h1>
                    </Link>

                    <Menu
                    // defaultSelectedKeys={['/home']}
                    // defaultOpenKeys={['/charts']}
                    mode="inline"
                    theme="dark"
                    // inlineCollapsed={this.state.collapsed}
                    >
                        {/* <Menu.Item key="/home" icon={<PieChartOutlined />}>
                            <Link to ='/home'>
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/info" icon={<DesktopOutlined />}>
                            <Link to ='/info'>
                                Rental Info 
                            </Link>
                        </Menu.Item>

                        <SubMenu key="sub1" icon={<MailOutlined />} title="Analysis">
                            <Menu.Item key="charts-bar" icon={<AppstoreOutlined />}>
                                <Link to ='/charts/bar'>
                                    Bar 
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="charts-line" icon={<AppstoreOutlined />}>
                                <Link to ='/charts/line'>
                                    Line 
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="charts-pies" icon={<AppstoreOutlined />}>
                                <Link to ='/charts/pie'>
                                    Pie
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="toDo1">
                                <SubMenu key="sub3" title="Submenu" icon={<AppstoreOutlined />}>
                                <Menu.Item key="11" icon={<AppstoreOutlined />}> Option 11</Menu.Item>
                                </SubMenu>
                        </SubMenu> */}

                        {
                            this.getMenuNodes(menuList)
                        }
                    </Menu>
                </div>       
            </div>    
        )
    }
}

export default withRouter(LeftNav)