import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(()=> import('../pages/Movies/Movies'))


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
