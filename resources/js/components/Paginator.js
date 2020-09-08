import React, { useEffect, useState } from 'react';

function Paginator(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [total, setTotal] = useState(0);
    const [countPerPage, setCountPerPage] = useState(1);
    const [offset, setOffset] = useState(1);
    
    useEffect(() => {
        setCurrentPage(props.data.current_page);
        setPageCount(props.data.last_page);
        setTotal(props.data.total);
        setCountPerPage(props.data.per_page);
    });

    const toPage = (page) => {
        props.handlePageChange(page);
    }

    const nextPage = () => {
        toPage(currentPage + 1);
    }

    const previousPage = () => {
        toPage(currentPage - 1);
    }

    const firstPage = () => {
        toPage(1);
    }

    const lastPage = () => {
        toPage(pageCount);
    }

    const renderPageNumbers = () => {

        if (pageCount >= 7) {   
            console.log(currentPage);
            let first = (currentPage >= 3 ? (currentPage > pageCount - 2 ? pageCount - 4 : currentPage - 2) : (currentPage === 2 ? currentPage - 1 : 1));
            let second = (currentPage >= 3 ? (currentPage > pageCount - 2 ? pageCount - 3 : currentPage - 1) : (currentPage === 2 ? currentPage : 2));
            let third = (currentPage >= 3 ? (currentPage > pageCount - 2 ? pageCount - 2 : currentPage) : 3);
            let elipse = (currentPage > pageCount - 2 ? pageCount - 1 : '...');
            return (
                <div>
                    <button onClick={() => toPage(first)} className={`${currentPage === first ? 'bg-indigo-500 text-white' : 'bg-white'} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                        {first}
                    </button>
                    <button onClick={() => toPage(second)} className={`${currentPage === second ? 'bg-indigo-500 text-white' : 'bg-white'} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                        {second}
                    </button>
                    <button onClick={() => toPage(third)} className={`${currentPage === third ? 'bg-indigo-500 text-white' : 'bg-white'} hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                        {third}
                    </button>
                    {currentPage > pageCount - 2 && (
                        <button onClick={() => toPage(elipse)} className={`${currentPage === elipse ? 'bg-indigo-500 text-white' : 'bg-white'} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                            {elipse}
                        </button>
                    )}
                    {currentPage <= pageCount - 2 && (
                        <span className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700`}>
                            {elipse}
                        </span>
                    )}
                    <button onClick={() => toPage(pageCount)} className={`${currentPage === pageCount ? 'bg-indigo-500 text-white' : 'bg-white'} -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150`}>
                        {pageCount}
                    </button>
                </div>
            );
        }

        let els = [];
        for (let i = 1; i <= pageCount; i++) {
            els.push(i);
        }

        return (
            <div>
                {els.map((i) => {
                    return (
                        <button 
                            key={i}
                            onClick={() => toPage(i)}
                            className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            {i}
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between lg:hidden">
                <button
                    onClick={previousPage}
                    className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${currentPage - 1 === 0 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                    disabled={currentPage - 1 === 0}>
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150 ${currentPage === pageCount ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                    disabled={currentPage === pageCount}>
                    Next
                </button>
            </div>
            <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm leading-5 text-gray-700">
                        Showing
                        <span className="font-medium"> {offset} </span>
                        to
                        <span className="font-medium"> {countPerPage * offset} </span>
                        of
                        <span className="font-medium"> {total} </span>
                        results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm">
                        <button
                            onClick={previousPage}
                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous" ${currentPage - 1 === 0 ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                            disabled={currentPage - 1 === 0}>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {renderPageNumbers()}

                        <button
                            onClick={nextPage}
                            className={`-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next ${currentPage === pageCount ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
                            disabled={currentPage === pageCount}>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

Paginator.defaultTypes = {
    data: {},
}

export default Paginator;
