import React from 'react'
import { FILTER_STATUS } from '../constants';


const FilterButtons = ({ activeFilter, onFilterChange }) => {
    return (
        <div className="flex space-x-3">
            {Object.values(FILTER_STATUS).map((status) => (
                <button
                    key={status}
                    className={`px-6 py-2 shadow-md rounded-full font-medium lg:text-lg md:text-md sm:text-sm
                    ${activeFilter === status
                            ? 'bg-red-700 text-neutral-0 dark:text-neutral-800'
                            : 'bg-neutral-0 text-neutral-600 dark:text-neutral-0 dark:bg-neutral-700'}`}
                    onClick={() => onFilterChange(status)}
                >
                    {status}
                </button>
            ))}

        </div>
    );
};

export default FilterButtons