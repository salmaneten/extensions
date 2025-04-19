import { useState } from 'react';
import Stack from '@mui/material/Stack';
import AntSwitch from './AntSwitch';
import extensionsData from '../ExtensionData';

const ExtensionCard = ({logo, name, description, isActive, onToggle, onRemove}) => {
  
  
  return (
    <div className="flex flex-col h-full mt-3 bg-neutral-0 dark:bg-neutral-700 shadow-md rounded-2xl overflow-hidden">
      <div className="flex flex-row flex-grow gap-4 px-3">
        <img className="pb-4 h-16 w-16 mt-3 object-contain" src={logo}/>
        <div className="flex flex-col p-3">
          <h3 className="text-xl font-bold dark:text-neutral-0">{name}</h3>
          <p className='text-neutral-500 dark:text-neutral-400'>{description}</p>
        </div>
      </div>
      <div className="flex justify-between p-3">
      <button className="px-3 py-2 border border-neutral-300 rounded-full text-neutral-600 dark:text-neutral-0 font-medium text-sm"
              onClick={onRemove}>
        Remove
      </button>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <AntSwitch checked={isActive}
                   onChange={onToggle}
                   inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
      </div>
    </div>
  )
}

export default ExtensionCard