import { useState, useEffect } from 'react';
import * as Styled from './MainPage.styles';
import Result from '../../../entities/Result';

const API_KEY = '';

export const MainPage: React.FC = () => {
    const [movies, setMovies] = useState<Result[]>();
    useEffect(() => {
        (async () => {
        const { results } = await (
            await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
        ).json();
        setMovies(results);
        })();
    }, []);

    return (
        <Styled.Container>
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <Styled.Movie key={movie.id}>
                    <Styled.MovieImg src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} />
                    <Styled.MovieTitle>{movie.original_title}</Styled.MovieTitle>
                </Styled.Movie>
            ))}
        
        </Styled.Container>
    );
}