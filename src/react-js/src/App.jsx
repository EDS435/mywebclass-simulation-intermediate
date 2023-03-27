import React from 'react';
import Header from './components/header';
import Content from './components/body';
import Footer from './components/footer';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
