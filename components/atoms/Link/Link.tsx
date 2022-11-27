import * as Styled from './Link.styles';

interface LinkProps {
    children: React.ReactNode;
    href?: string;
    underline?: boolean;
}
export const Link: React.FC<LinkProps> = ({
    children,
    href,
    underline
}) => {
    return (
        <Styled.Link 
            href={href}
            underline={underline}
        >
            {children}
        </Styled.Link>
    );
}