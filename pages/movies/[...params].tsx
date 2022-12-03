import { useRouter } from "next/router";
import Seo from '../../components/organisms/Seo';

interface movies {
    params: string[]
}

const Movies: React.FC<movies> = ({ params }) => {
    const router = useRouter();
    const [title, id] = params ?? [];

    return (
        <>
            <Seo title={title} />
            <div>Movies: {title}</div>
        </>
        
    );
}
export default Movies;

export function getServerSideProps({ params: { params }} ){
    return {
        props: {
            params,
        }
    }
}
