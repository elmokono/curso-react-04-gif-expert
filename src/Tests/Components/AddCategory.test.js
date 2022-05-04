import { shallow } from "enzyme"
import '@testing-library/jest-dom'
import { AddCategory } from "../../Components/AddCategory"

describe('test over addCategory', () => {

    const setCategoriesDummy = jest.fn(); //trackea llamadas
    let wrapper;//shallow(<AddCategory setCategories={setCategoriesDummy} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategoriesDummy} />);
    });

    test('should display correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should invoke handleInput', () => {
        const textInput = wrapper.find('input');
        const textDummy = 'hola';
        textInput.simulate('change', { target: { value: textDummy } });

        const pValue = wrapper.find('p');
        expect(pValue.text().trim()).toBe(textDummy);
    })

    test('should NOT submit on short text', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategoriesDummy).not.toHaveBeenCalled();
    })

    test('should clear input text after submit', () => {
        wrapper.find('input').simulate('change', { target: { value: 'hola mundo' } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategoriesDummy).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})