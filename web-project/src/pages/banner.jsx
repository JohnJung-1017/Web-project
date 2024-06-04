import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import '../css/banner.css';

function banner() {
  return (
    <div>
        <div className='banner'>
            <div className='banner_title'>
                <Icon icon="unjs:jiti" width="6vh" height="6vh" />
                <p>오늘     뭐먹지?</p>
            </div>
            <Link className='bannerMenu' to={'/main'}>Home</Link>
            <Link className='bannerMenu' to={'/board'}>게시판</Link>
            <Link className='bannerMenu' to={'/recommend'}>추천메뉴</Link>
            <Link className='bannerMenu' to={'/search'}>검색</Link>
            <button className="logout_button" onClick={null}>logout</button>
        </div>
    </div>
  )
}

export default banner