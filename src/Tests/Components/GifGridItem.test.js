import { shallow } from "enzyme";
import { GifGridItem } from "../../Components/GifGridItem";

describe('tests over GifGridItem', () => {

    const id = "1234ABC";
    const title = "test1";
    const url = "http://test";
    const wrapper = shallow(<GifGridItem id={id} title={title} url={url} />);

    test('should display component correctly (match snapshot)', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should display title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should display image props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should contains class animated', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })

})