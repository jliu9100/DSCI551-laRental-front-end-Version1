import React, {Component} from "react";
import './header.less'
import menuList from "../../config/menuConfig";
import logo from "../../assets/images/SC.png"

import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";

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


class Header extends Component {
    getTitle = () => {
        const path = this.props.router.location.pathname
        let title
        menuList.forEach(item=>{
            if(item.key===path){
                title = item.title
            }else if (item.children){
                const cItem = item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title = cItem.title
                    // 三级菜单应该递归
                }
            }
        })
        return title
    }

    render() {
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>Welcome,admin</span>
                    <a href="javascript:">log out</a>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        {title}
                    </div>
                    <div className="header-bottom-right">
                        <span>
                            Mar. 26, 2022
                            <img src={logo} alt='weather'/>
                        </span>
                        <span>Sunny</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)