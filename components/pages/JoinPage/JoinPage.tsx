import * as Styled from './JoinPage.styles';
import { JoinForm } from '../../organisms/JoinForm/JoinForm';

export const JoinPage: React.FC = () => {
    return (
        <Styled.Container>
            <JoinForm />
        </Styled.Container>
    );
}