import Genre from './Genre';
import ProductionCompany from './ProductionCompany';
import ProductionCountry from './ProductionCountry';
import Language from './Language';
export default class Result {
    public adult: boolean;
    public belongs_to_collection: boolean;
    public budget: number;
    public genres: Genre[];
    public homepage: string;
    public id: number;
    public imdb_id: string;
    public original_language: string;
    public original_title: string;
    public overview: string;
    public popularity: number;
    public poster_path: string;
    public production_companies?: ProductionCompany[];
    public production_countries?: ProductionCountry[];
    public release_date: string;
    public spoken_languages?: Language[];
    public status: string;
    public tagline: string;
    public title: string;
    public video: boolean;
    public vote_average: number;
    public vote_count: number;
}