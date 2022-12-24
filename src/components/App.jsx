import { ThemeProvider } from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {  ToastContainer } from 'react-toastify';
import { theme } from '../theme/theme';
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { lazy } from "react";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(()=> import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));


export const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
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
          <ToastContainer autoClose={3000}/>
      </ThemeProvider>
  </>
    
  );
};
