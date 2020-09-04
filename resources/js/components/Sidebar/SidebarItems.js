import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarItems(props) {
    const [selected, setSelected] = useState('/');
    const location = useLocation();
    const isMobile = props.isMobile ?? false;

    const items = [
        { title: 'Dashboard', icon: 'home', url: '/home' },
        { title: 'Teams', icon: 'users', url: '/teams' },
        { title: 'Projects', icon: 'tasks', url: '/projects' },
        { title: 'Purchases', icon: 'shopping-cart', url: '/purchases' },
        { title: 'Units', icon: 'boxes', url: '/units' },
        { title: 'Sales', icon: 'money-bill-alt', url: '/sales' },
    ];

    const sidebarStyle = 'mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150 hover:no-underline';
    const sidebarStyleSelected = 'mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-gray-900 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 hover:no-underline';

    useEffect(() => {
        setSelected(location.pathname);
    });

    return (
        <div>
            {items.map((item) => {
                return (
                    <Link
                        key={item.title} 
                        to={item.url} 
                        className={selected.includes(item.url) ? sidebarStyleSelected : sidebarStyle}>
                        <FontAwesomeIcon 
                            icon={item.icon} 
                            className="mr-4" 
                            size="lg" 
                        />
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
}

SidebarItems.defaultProps = {
    isMobile: false,
};

export default SidebarItems;