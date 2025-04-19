import React, { useState } from 'react'
import extensionsData from '../ExtensionData'
import ExtensionCard from './ExtensionCard'
import FilterButtons from './FilterButtons'
import { FILTER_STATUS, FILTER_MAP } from '../constants';



const ExtensionsList = () => {
    const [extensions, setExtensions] = useState(extensionsData);
    const [activeFilter, setActiveFilter] = useState(FILTER_STATUS.ALL);
    const handleExtensionToggle = (name) => {
        setExtensions(prevExtensions => {
          const extension = prevExtensions.find(ext => ext.name === name);
          if (extension) {
            extension.isActive = !extension.isActive;
            return [...prevExtensions];
          }
          return prevExtensions;
        });
    };
    const filteredExtensions = extensions.filter(
       FILTER_MAP[activeFilter] || FILTER_MAP[FILTER_STATUS.ALL]
      );
      const handleRemoveExtension = (name) => {
        setExtensions(prevExtensions => 
          prevExtensions.filter(ext => ext.name !== name)
        );
      };
  return (
    <div className="max-w-7xl mx-auto pt-7 ">
      <div className="flex justify-between items-center max-[640px]:flex-col">
        <h1 className="py-7 text-3xl font-bold dark:text-neutral-0">Extensions List</h1>       
        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter}/>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-[375px]:px-3">
        { filteredExtensions?.map((extension, index) => (
            <ExtensionCard 
                key={index}
                logo={extension.logo} 
                name={extension.name} 
                description={extension.description}
                isActive={extension.isActive}
                onToggle={() => handleExtensionToggle(extension.name)}
                onRemove={() => handleRemoveExtension(extension.name)}
                />
        ))}
    </div>
    
    </div>
  
  )
}

export default ExtensionsList