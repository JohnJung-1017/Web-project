import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/fbinstance';
import Banner from '../components/banner';
import "../css/main.css";

const Main = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const boardCollection = collection(db, 'board');
      const querySnapshot = await getDocs(boardCollection);
      const postsArray = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        postsArray.push({
          title: data.title,
          nickname: data.nickname,
          content: data.content,
          date: data.date,
        });
      });

      setPosts(postsArray);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchPosts();
  }, []);

  const boardTable = (
    <table>
      <thead>
        <tr>
          <th>닉네임</th>
          <th>제목</th>
          <th>내용</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.nickname}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className='main_background'>
      <Banner/>
      <div className='main_content'>
        <div className='main_container'>
          <div className='main_box1'>
            <div className='main_board'>
              <h3>게시판</h3> <hr/>
              {boardTable}
            </div>
          </div>
          <div className='main_box2'>
            <div className='main_search'>
              <h3>레시피 검색</h3> <hr/>
              <p>한식|김치찌개</p> <hr/>
              <p>한식|계란말이</p> <hr/>
              <p>중식|간단한 마라탕</p> <hr/>
            </div>
            <div className='main_recommend'>
              <h3>오늘의 메뉴 추천</h3> <hr/>
              <p>한식 : 칼국수</p><hr/>
              <p>양식 : 스테이크</p><hr/>
              <p>일식 : 초밥</p><hr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;