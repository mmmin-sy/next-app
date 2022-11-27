import NavBar from "../components/NavBar/NavBar";
interface Props {
    children: React.ReactNode;
}
export const Layout = ({ children }: Props) =>{
    return (
        <>
            <NavBar />
            <div></div>
        </>
    );
}