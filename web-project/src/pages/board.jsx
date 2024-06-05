import React from 'react'
import Banner from '../components/banner';
import '../css/board.css';

const board = () => {
  return (
    <div className='main_background'>
      <Banner/>
      <div className='main_content'>
        <div>
          <h3 className='main_title'>[자유 게시판]</h3>
          <hr/>
          <div className='main_scroll_box'></div>
        </div>
      </div>
    </div>
  )
}

export default board