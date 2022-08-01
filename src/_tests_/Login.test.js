import { render, fireEvent } from './test_utils';
import Login from '../components/login/login'

describe('Login', () => {
    let component;
    beforeEach(() => {
        component = render(
            <Login />,
        );
    })

    test('Should render', async () => {
        expect(component).toBeTruthy();
    });

    test('Should match snapshot', async () => {
        expect(component).toMatchSnapshot();
    });

    test('Should have logo component', async () => {
        const btn = component.getByText('Login')
        expect(btn).toHaveTextContent('Login')
    });

    test('Should have disabled button', async () => {
        const btn = component.getByText('Login').closest('button')
        expect(btn).toBeDisabled()
    })
    
    test('Should have enabled button', async () => {
        const input = component.getByPlaceholderText('Username')
        fireEvent.change(input, {target: {value: '2323'}})
        const btn = component.getByText('Login').closest('button')

        expect(btn).toBeEnabled()
    })
})
