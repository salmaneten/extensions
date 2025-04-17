import React from 'react'
import extensionsData from '../ExtensionData'
import ExtensionCard from './ExtensionCard'
import FilterButtons from './FilterButtons'


const ExtensionsList = () => {

  return (
    <div className="max-w-7xl mx-auto pt-7">
      <div className="flex justify-between items-center">
        <h1 className="py-7 text-3xl font-bold dark:text-neutral-0">Extensions List</h1>       
        <FilterButtons/>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        { extensionsData?.map((extension, index) => (
            <ExtensionCard 
                key={index}
                logo={extension.logo} 
                name={extension.name} 
                description={extension.description}
                isActive={extension.isActive}    
                />
        ))}
    </div>
    
    </div>
  
  )
}

export default ExtensionsList