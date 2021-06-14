import { Alert } from '@material-ui/lab';
import React, { ReactElement, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBookmarkedMovies } from '../services/services';
import MovieCard from './movieCard';

interface Props {
    
}

export default function BookMarks({}: Props): ReactElement {
    const [myMovies, setmyMovies] = useState([])
    const usersState = useSelector((state:any) => state.user)
    useEffect(() => {
        getBookmarkedMovies(usersState)
        .then((res:any)=>{
            setmyMovies(res.data)
        })
       
    }, [])
    return (
        <div style={{marginTop:"5%"}}>
      <div className="card-columns" style={{ display: "inline-block" }}>
        {myMovies!== undefined?myMovies.map((movie: any) => {
          return (
            <MovieCard movie={movie}></MovieCard>
          );
        }):<Alert severity="error" style={{marginLeft:"20%"}}>No movies found</Alert>}
      </div>
    </div>
    )
}
