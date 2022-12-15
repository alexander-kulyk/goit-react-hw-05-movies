import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(()=> import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
        </Route>
      </Routes>
  </>
    
  );
};
