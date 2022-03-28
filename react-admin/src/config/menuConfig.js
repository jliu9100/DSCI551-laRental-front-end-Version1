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
const menuList = [
    {
        title: 'Home',
        key: '/home',
        icon: <HomeTwoTone />

    },
    {
        title: 'Rental Info',
        key: '/info',
        icon: <OrderedListOutlined />
    },
    {
        title: 'Analysis',
        key: '/charts',
        icon: <DotChartOutlined />,
        children: [
            {
                title: 'Bar Chart',
                key: '/charts/bar',
                icon: <BarChartOutlined />
            },
            {
                title: 'Line Chart',
                key: '/charts/line',
                icon: <LineChartOutlined />
            },
            {
                title: 'Pie Chart',
                key: '/charts/pie',
                icon: <PieChartOutlined />
            }

        ]
    }
]

export default menuList