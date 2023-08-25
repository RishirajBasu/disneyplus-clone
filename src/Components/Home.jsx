import React from "react";
import { styled } from "styled-components";
import ImgSlider from "./ui/ImgSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import NewDisneyPlus from "./NewDisneyPlus";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/users/userSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  let recommended = [];
  let newDisneyPlus = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    // retrieving data from firebase firestore
    db.collection("movies").onSnapshot((snapshot) => {
      console.log("recommend1:", recommended);
      console.log("newDisneyPLus1:", newDisneyPlus);
      console.log("originals:", originals);
      console.log("trending:", trending);
      // docs are the list of documents in the collections
      snapshot.docs.map((doc) => {
        // here the type field of each doc is selected
        switch (doc.data().type) {
          case "recommend":
            // console.log("type: rec");
            // here we cannot use the push() array method as the we cannot mutate parent states which are getting reflected on the UI in react

            recommended = [...recommended, { id: doc.id, ...doc.data() }];
            // here as we go through the entire movies and as we encounter the movies, we add the new old with the help of spread operator from the json recieved along with copying the previous data stored with the spread operator
            break;
          case "new":
            // console.log("type: new");
            newDisneyPlus = [...newDisneyPlus, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            // console.log("type: tren");
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            // console.log("type: ori");
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovies({
          recommended: recommended,
          newDisneyPlus: newDisneyPlus,
          originals: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewDisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
  /* */
`;
export default Home;
