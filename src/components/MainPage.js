import React from 'react'
import Nav from './Nav'
import Title from './Title'

const MainPage = ({children}) => {
  return (
    <div className='container mx-3 my-3'>
        <Title title="Box-office" subtitle="Looking for movie or actor?"/>
        <Nav/>

        {children}
    </div>
  )
}

export default MainPage