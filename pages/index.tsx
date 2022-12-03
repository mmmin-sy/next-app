import { MainPage } from '../components/pages/MainPage/MainPage';
import Seo from "../components/organisms/Seo";

export default function Home() {
  return (
    <>
        <Seo title="Home" />
        <MainPage /> 
    </>
  );
}
