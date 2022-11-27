import Seo from "../components/organisms/Seo";
import { AboutPage } from '../components/pages/AboutPage/AboutPage';

export default function About() {
    return (
        <>
            <Seo title="About" />
            <AboutPage />
        </>
    );
}