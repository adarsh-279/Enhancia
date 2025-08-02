import React from 'react'
import Home from './components/Home'
import Header from './components/fixed/Header'
import Footer from './components/fixed/Footer'

const App = () => {
  return (
    <div className='w-full h-screen bg-gray-900 text-white flex flex-col items-center justify-center'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App