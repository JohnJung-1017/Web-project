import React from 'react'
import Banner from '../components/banner';
import "../css/main.css";

const Main = () => {
  return (
    <div className='main_background'>
      <Banner/>
      <div className='main_content'>
        무야호
      </div>
    </div>
  )
}

export default Main;