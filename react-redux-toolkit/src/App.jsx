import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CakeView } from '../src/features/cake/CakeView'
import { IceCreamView } from '../src/features/iceCream/IceCreamView'
import { UsersView } from '../src/features/users/UsersView'

function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'></div>

      <CakeView />
      <IceCreamView />
      <UsersView />
    </div>
  )
}

export default App
