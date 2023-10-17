import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import Layout from "../layout/MainLayout";
import Hero from "../components/Hero/Hero";
import List from "../components/List/List";
import photoService from "../service/photo";
import Container from "../components/Container/Container";

import "../styles/index.scss";

const Home = () => {

  const [data, setData] = useState({});
  useEffect(() => {
    const getPhoto = async () => {
      const data = await photoService.getCurated();

      setData(data);
    };
    getPhoto();
  }, []);

  console.log(data);

  const makeSearch = async (query) => {
    try {
      const data = await photoService.searchPhoto(query);
      setData(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Layout>
      <Hero>
        <h1 className="title">Your magic wallpaper</h1>
        <SearchForm onSubmit={makeSearch} />
      </Hero>
      <Container>
        {data.photos && <List data={data} />}
        <Link to='/WallPapers' className='link-getMore'>
          Get more
        </Link>
      </Container>     
    </Layout>
    );
};

export default Home;
