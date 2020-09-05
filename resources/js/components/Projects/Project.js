import React, { useEffect, useState } from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProjectsService from '../../services/ProjectsService';

import ProjectDetails from './Details';
import Purchases from '../Purchases';
import Units from '../Units';

const tabs = [
    { id: 1, title: 'Purchases', icon: 'shopping-cart', slug: 'purchases' },
    { id: 2, title: 'Units', icon: 'boxes', slug: 'units' },
    { id: 3, title: 'Sales', icon: 'money-bill-alt', slug: 'sales' },
];

function Project() {
    const [tab, setTab] = useState(tabs[0].slug);
        
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    const { url, path } = useRouteMatch();
    const { projectId } = useParams();

    useEffect(() => {
        ProjectsService._get(projectId)
            .then((r) => {
                setProject(r);
                setLoading(false);
            });
    }, []);

    const renderTab = () => {
        switch (!loading && tab) {
            case 'purchases':
                return <Purchases project={project} />;
            case 'units':
                return <Units project={project} />;
            case 'sales':
                return <p>Sales</p>
            default: 
                return <p>Loading...</p>;
        }
    }

    return (
        <div>
            {project && <ProjectDetails project={project} />}
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                    {tabs.map((item) => {
                        return (
                            <button
                                key={item.id} 
                                onClick={() => setTab(item.slug)}
                                className={`${item.id !== 1 ? 'ml-8' : ''} hover:no-underline group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm leading-5 ${item.slug === tab ? 'border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300'}`}>
                                <FontAwesomeIcon 
                                    icon={item.icon}
                                    size="lg"
                                    className={`-ml-0.5 mr-2 h-5 w-5 ${item.slug === tab ? 'text-indigo-500 group-focus:text-indigo-600' : 'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'}`}
                                />
                                <span>{item.title}</span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {renderTab()}
        
        </div>
    );
}

export default Project;
