import React from 'react'
import SwitchDarkMode from './SwitchDarkMode';
import ToggleLenguage from './ToggleLenguage';

const TogglersContainer = () => {

  return (
    <div className='col-span-2 col-start-10 lg:col-start-12 flex justify-around items-center'>
      <SwitchDarkMode/>
    </div>
  )
}

export default TogglersContainer