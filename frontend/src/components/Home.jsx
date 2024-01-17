import React from "react";
import Header from "./Header";
import Post from './Post';
import Search from "./Search";
import SinglePost from "./SinglePost";


const Home = () => {
  return (
    <>
      <Header />
      {/* <SinglePost /> */}
      <Search />
      <Post />
    </>
  );
};

export default Home;
