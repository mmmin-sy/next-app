import { useState, useEffect } from 'react';
import * as Styled from './MainPage.styles';
import Result from '../../../entities/Result';
import Link from 'next/link';
import { useRouter } from 'next/router';

const API_KEY = '';

export const MainPage: React.FC = () => {
    const [movies, setMovies] = useState<Result[]>();
    const router = useRouter();
    const onClick = (id: number, title: string) => {
        router.push(`/movies/${title}/${id}`);
    }
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
                <Styled.Movie onClick={() => onClick(movie.id, movie.original_title)} key={movie.id}>
                    <Styled.MovieImg src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} />
                    <Styled.MovieTitle>{movie.original_title}</Styled.MovieTitle>
                </Styled.Movie>
            ))}
        </Styled.Container>
    );
}