import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div id="homepage-container" style={{
      height: Math.max(document.innerHeight, 0)
    }}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
