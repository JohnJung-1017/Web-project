import React from 'react'
import Banner from '../components/banner';
import '../css/search.css';

const search = () => {
  return (
    <div className='main_background'>
      <Banner/>
      <div className='main_content'>
        <div className='search_container'>
          <div className='search_title'>
            <h2>레시피 검색</h2> <hr/>
            <button>한식</button>
            <button>중식</button>
            <button>양식</button>
          </div>
          <div className='search_recipe'>
            <h2>김치찌개</h2>
            <p>
              김치찌개 레시피 <br/>
              1.돼지고기는 분량의 양념을 넣어 조물조물 해주신후 30분 이상 재웁니다.	<br/>
              2.냄비에 썰어둔 김치와 밑간한 돼지고기, 김칫국물 5큰술, 참기름 1작은술을 넣어 약불에서 3~5분간 충분히 볶아줍니다.<br/>
              3.돼지고기 자체에 지방이 붙어있으니 참기름은 많이 넣지 않으셔도 된답니다. 이렇게 충분히 볶아주세요~.<br/>
              4.충분히 볶아진 김치에 물 1컵을 넣어 끓여줍니다.<br/>
              5.물 1컵을 넣어 보글보글 끓여준후 나머지 1컵을 더 부워주도록 합니다. 물을 한꺼번에 부워서 끓이는것보다 이렇게 나눠서 끓여주면 국물맛이 더욱 좋아진답니다.<br/>
              6.물 1컵을 넣어 보글보글 끓여준후 나머지 1컵을 더 부워주도록 합니다. 물을 한꺼번에 부워서 끓이는것보다 이렇게 나눠서 끓여주면 국물맛이 더욱 좋아진답니다.<br/>
              7.국간장을 넣어줍니다.<br/>
              8.모든 재료가 한데 잘 어우러졌다면 다진마늘과 어슷 썬 고추 1개를 넣어줍니다.<br/>
              9.부족한 간은 소금으로 해주시고 대파와 나머지 고추 1개를 더 넣어 한소끔 더 끓이신후 마무리 합니다.<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default search