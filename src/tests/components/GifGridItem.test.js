import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
  const title = 'Un título';
  const url = 'https://github/hada.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de coincidir la imagen src de la url y el tutulo con alt', () => {
    const img = wrapper.find('img');
    // console.log(img.prop('src'));
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe de tener la clase animate__fadeInUp', () => {
    const div = wrapper.find('div');
    const animate = 'animate__fadeInUp';
    expect(div.prop('className').includes(animate)).toBe(true);
  });
});
