import { render, fireEvent } from './test_utils';
import Signup from '../components/signup/SignUp'

describe('Login', () => {
    let component;
    beforeEach(() => {
        component = render(
            <Signup />,
        );
    })

    test('Should render', async () => {
        expect(component).toBeTruthy();
    });

    test('Should match snapshot', async () => {
        expect(component).toMatchSnapshot();
    });

    test('Should have logo component', async () => {
        const btn = component.getByText('Sign up')
        expect(btn).toHaveTextContent('Sign up')
    });

    test('Should have disabled button', async () => {
        const btn = component.getByText('Sign up').closest('button')
        expect(btn).toBeDisabled()
    })

    test('Should have disabled button', async () => {
        const input = component.getByPlaceholderText('Username')
        const confirmInput = component.getByPlaceholderText('Confirm username')

        fireEvent.change(input, {target: {value: '2323'}})
        fireEvent.change(confirmInput, {target: {value: '4545'}})

        const btn = component.getByText('Sign up').closest('button')

        expect(btn).toBeDisabled()
    })
    
    test('Should have enabled button', async () => {
        const input = component.getByPlaceholderText('Username')
        const confirmInput = component.getByPlaceholderText('Confirm username')

        fireEvent.change(input, {target: {value: '2323'}})
        fireEvent.change(confirmInput, {target: {value: '2323'}})

        const btn = component.getByText('Sign up').closest('button')

        expect(btn).toBeEnabled()
    })
})