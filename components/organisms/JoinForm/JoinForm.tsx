import { FormFormik } from '../../atoms/Form/FormFormik';
import { FormFieldInput } from '../../molecules/FormField/FormFieldInput';
import { Button } from '../../atoms/Button/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import * as Styled from './JoinForm.styles';
import { Row, Cell } from '../../atoms/Grid';

export const JoinForm: React.FC = () => {
    return (
        <FormFormik
            initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                password: '',
            }}
            validationSchema={
                yup.object({
                    email: yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    firstName: yup.string()
                        .max(5, 'Must be 5 characters or less')
                        .required('Required'),
                    lastName: yup.string()
                        .max(6, 'Must be 6 characters or less')
                        .required('Required'),
                    password: yup.string()
                        .min(8, 'Must be 8 characters or more')
                        .matches(
                            /^(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                            'Password must contain one digit, uppercase letter, special character, no space, 8-16 long.'
                        ),
                })
            }
            onSubmit={ values => {
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ dirty, values, touched, errors }) => (
                <>  
                    <Row>
                        <Cell column={1}>
                            <FormFieldInput
                                name="firstName"
                                placeholder="First name"
                                disabled={false}
                                label="First name"
                            />
                        </Cell>
                        <Cell column={1}>
                            <FormFieldInput
                                name="lastName"
                                placeholder="Last name"
                                disabled={false}
                                label="Last name"
                            />
                        </Cell>
                    </Row>
                    
                    <Row>
                        <Cell column={2}>
                            <FormFieldInput
                                name="email"
                                placeholder="Email address"
                                disabled={false}
                            />
                        </Cell>
                    </Row>

                    <Row>
                        <Cell column={2}>
                            <FormFieldInput
                                name="password"
                                placeholder="Password"
                                disabled={false}
                                type="password"
                            />
                        </Cell>
                    </Row>
                    
                    <Row 
                        paddingLeft={10}
                        paddingRight={10}
                    >
                        <Cell column={2}>
                            <Styled.ButtonWrap>
                                <Button type="submit">SIGN UP</Button>
                            </Styled.ButtonWrap>
                        </Cell>
                    </Row>
                </>          
            )}
        </FormFormik>
    )
}