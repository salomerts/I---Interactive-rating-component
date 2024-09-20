
import './App.css'
import { Card } from './components/card'
import { Result } from './components/result'
import { useState } from 'react'

function App() {
const [submit, setSubmit] = useState(false)
const [rate, setRate] = useState(null)
  return (
    <>
    {!submit ? (<Card setSubmit = {setSubmit} rate = {rate} setRate = {setRate} />) : (<Result rate={rate}/>)}

 
    </>
  )
}

export default App
