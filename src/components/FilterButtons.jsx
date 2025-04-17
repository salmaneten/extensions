import React, { useState } from 'react'

const FilterButtons = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    return (
        <div className="flex space-x-3">
            <button className={`px-6 py-2 shadow-md rounded-full font-medium text-lg
                            ${activeFilter === 'All'
                    ? 'bg-red-700 text-neutral-0 dark:text-neutral-800'
                    : 'bg-neutral-0 text-neutral-600 dark:text-neutral-0 dark:bg-neutral-700'}`}
                onClick={() => setActiveFilter('All')}>
                All
            </button>
            <button className={`px-6 py-2 shadow-md rounded-full font-medium text-lg
                            ${activeFilter === 'Active'
                        ? 'bg-red-700 text-neutral-0 dark:text-neutral-800'
                        : 'bg-neutral-0 text-neutral-600 dark:text-neutral-0 dark:bg-neutral-700' }` }
                onClick={() => setActiveFilter('Active')}>
                Active
            </button>
            <button className={`px-6 py-2 shadow-md rounded-full font-medium text-lg
                                ${activeFilter ==='Inactive' 
                        ? 'bg-red-700 text-neutral-0 dark:text-neutral-800'
                        : 'bg-neutral-0 text-neutral-600 dark:text-neutral-0 dark:bg-neutral-700'}` }
                onClick={() => setActiveFilter('Inactive')}>
                Inactive
            </button>
        </div>
    );
};

export default FilterButtons