import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import Pagination from '../../components/Pagination';
import './styles.css'
import { BASE_URL } from '../../utils/requests';
import axios from 'axios';
import { MoviePage } from '../../models/movie';

export default function Listing()
{

  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() =>
  {
    axios.get(`${BASE_URL}/movies?size=12&page=1`)
      .then(response =>
      {
        const data = response.data as MoviePage
        setPageNumber(data.number)
      })
  }, [])

  return (
    <>
      <Pagination />
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
          <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}