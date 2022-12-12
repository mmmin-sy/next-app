import { Formik, FormikProps } from 'formik';
import { Form } from './Form';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import type { FormikValues, FormikConfig } from 'formik';

export type FormFormikProps = {
    children: (props: FormikProps<FormikValues>) => React.ReactNode;
    onFormChange?: (values: FormikProps<FormikValues>) => void;
} & FormikConfig<FormikValues>;

export const FormFormik: React.FC<FormFormikProps> = ({ children, onFormChange, ...args }) => {
    return (
        <Formik {...args}>
            {(props: FormikProps<FormikValues>) => (
                <Form
                    onSubmit={props.handleSubmit}
                    onChange={() => {
                        if (onFormChange) onFormChange(props);
                    }}
                >
                    {children(props)}
                </Form>
            )}
        </Formik>
    );
}