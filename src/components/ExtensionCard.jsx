import React from 'react'
import Stack from '@mui/material/Stack';
import AntSwitch from './AntSwitch';



const ExtensionCard = ({logo, name, description, isActive}) => {
  
  return (
    <div className="mt-3 bg-neutral-0 dark:bg-neutral-700 rounded-2xl overflow-hidden">
      <div className="flex flex-row gap-4 px-3">
        <img className="pb-4" src={logo}/>
        <div className="flex flex-col p-3">
          <h3 className="text-xl font-bold dark:text-neutral-0">{name}</h3>
          <p className='text-neutral-500 dark:text-neutral-400'>{description}</p>
        </div>
      </div>
      <div className="flex justify-between p-3">
      <button className="px-3 py-2 border border-neutral-300 rounded-full text-neutral-600 dark:text-neutral-0 font-medium text-sm">
        Remove
      </button>
      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
        <AntSwitch checked={isActive} inputProps={{ 'aria-label': 'ant design' }} />
      </Stack>
      </div>
    </div>
  )
}

export default ExtensionCard