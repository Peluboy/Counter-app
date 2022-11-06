import React, { useState } from 'react'
import { CustomHook } from '../components/CustomHook';
import { UseReducer } from '../components/UseReducer';

function CounterHome() {

    const [active, setActive] = useState(true);

  return (
    <div>
      {active ? <CustomHook setActive={setActive} active={active}/> : <UseReducer setActive={setActive} active={active}/>}
    </div>
  )
}

export default CounterHome
