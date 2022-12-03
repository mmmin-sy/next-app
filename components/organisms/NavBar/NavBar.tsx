import Link from "next/link";
import { useRouter } from "next/router";
import * as Styled from './NavBar.styles';

export default function NavBar() {
    const router = useRouter();
    return (
        <Styled.Navigation>
            <img src="/vercel.svg" />
            <Styled.Links>
                <Link href="/" className={"link"}>
                    <Styled.LinkText active={router.pathname === "/"}>Home</Styled.LinkText>
                </Link>
                <Link href="/about" className={"link"}>
                    <Styled.LinkText active={router.pathname === "/about"}>About</Styled.LinkText>
                </Link>
                <Link href="/movies" className={"link"}>
                    <Styled.LinkText active={router.pathname === "/movies"}>Movies</Styled.LinkText>
                </Link>
            </Styled.Links>
        </Styled.Navigation>
    );
}