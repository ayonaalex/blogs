import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

  const{blogs,isPenidng,error}=useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPenidng && <div>Loading</div>}
      {blogs && <Bloglist blogs={blogs}  />}
    </div>
  );
};

export default Home;
