import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/fbinstance';
import Banner from '../components/banner';
import '../css/board.css';

const Board = () => {
  const [posts, setPosts] = useState([]);

  // Firestore에서 데이터 가져오기
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

  // 테이블 렌더링
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
      <Banner />
      <div className='main_content'>
        <div className='board_container'>
          <div className='board_title'>
            <h2>[자유 게시판]</h2>
            <button className='board_title_button'>게시글 작성하기</button>
          </div>
          <div className='board_table'>
            {boardTable}
          </div>
          <div className='board_space'>
            <div className='board_page'>1️⃣2️⃣3️⃣4️⃣</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;