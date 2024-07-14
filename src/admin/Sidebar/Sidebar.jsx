import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



const SidebarNav = () => {
    return (
        <div className=''>
            <Sidebar rootStyles={{
                [`.${sidebarClasses.container}`]: {
                    backgroundColor: 'black',
                     height: '100vh'
                },
            }}>
                <Menu menuItemStyles={{
                    button: {
                        // the active class will be added automatically by react router
                        // so we can use it to style the active menu item
                        [`&.active`]: {
                            backgroundColor: '#00000',
                            color: '#00000',
                        },
                    },
                }}>

                    <Link to={"/dashboard"}><MenuItem> Dashboard </MenuItem></Link>
                    <Link to={"/book-list"}><MenuItem> Book List </MenuItem></Link>
                    <Link ><MenuItem> Dashboard </MenuItem></Link>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarNav;