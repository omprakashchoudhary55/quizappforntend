import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/rscit' element="rscit"/>
    <Route path='/tally' element="tally"/>
    <Route path='/about' element="about"/>
    </Routes>
  )
}

export default AllRoutes
