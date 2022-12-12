import * as Styled from './Paragraph.styles';

interface ParagraphProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
}

export const Paragraph: React.FC<ParagraphProps> = ({ children, align = 'left' }) => {
    return (
        <Styled.Paragraph align={align}>
            {children}
        </Styled.Paragraph>
    );
}
