import React from 'react'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Form from './components/Form'

const App = () => {
  return (
    <>
      <Topbar />

      <main>
        <div className='container main'>
          <Sidebar />
          <div className='dashboard'>
            {/* <Form /> */}
            <Dashboard />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
