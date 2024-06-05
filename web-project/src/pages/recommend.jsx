import React, { useState } from 'react';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/fbinstance';
import { Icon } from '@iconify/react';
import Banner from '../components/banner';
import '../css/recommend.css';

const Recommend = () => {

  const [recommendation, setRecommendation] = useState('');

  const fetchRecommendation = async (type) => {
    try {
      let docRef;
      if (type === 'all') {
        const types = ['korean', 'japanese', 'chinese', 'western'];
        const randomType = types[Math.floor(Math.random() * types.length)];
        docRef = doc(collection(db, 'recommends'), randomType);
      } else {
        docRef = doc(collection(db, 'recommends'), type);
      }

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const keys = Object.keys(data);
        const randomField = keys[Math.floor(Math.random() * keys.length)];
        setRecommendation(data[randomField]);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching recommendation: ', error);
    }
  };


  return (
    <div className='main_background'>
      <Banner/>
      <div className='main_content'>
        <div className='recommend_content'>
          <div className='recommend_box'>
            <p className='recommend_category'>한식</p>
            <Icon icon="fa6-solid:bowl-food" width="15vh" height="15vh" />
            <button className='recommend_button' onClick={() => fetchRecommendation('korean')}>뽑기</button>
          </div>
          <div className='recommend_box'>
            <p className='recommend_category'>일식</p>
            <Icon icon="maki:restaurant-sushi" width="15vh" height="15vh" />
            <button className='recommend_button' onClick={() => fetchRecommendation('japanese')}>뽑기</button>
          </div>
          <div className='recommend_box'>
            <p className='recommend_category'>중식</p>
            <Icon icon="simple-icons:foodpanda" width="15vh" height="15vh"/>
            <button className='recommend_button' onClick={() => fetchRecommendation('chinese')}>뽑기</button>
          </div>
          <div className='recommend_box'>
            <p className='recommend_category'>양식</p>
            <Icon icon="pajamas:food" width="15vh" height="15vh" />
            <button className='recommend_button' onClick={() => fetchRecommendation('western')}>뽑기</button>
          </div>
          <div className='recommend_box'>
            <p className='recommend_category'>전체</p>  
            <Icon icon="game-icons:perspective-dice-six-faces-random" width="15vh" height="15vh" />
            <button className='recommend_button' onClick={() => fetchRecommendation('all')}>뽑기</button>
          </div>
        </div>
        <div className='recommend_output'>
          <p className='recommend_output_menu'>오늘의 추천 메뉴 :</p>
          {recommendation && <p className='recommend_output_menu' >{recommendation}</p>}
        </div>
      </div>
    </div>
  )
}

export default Recommend;