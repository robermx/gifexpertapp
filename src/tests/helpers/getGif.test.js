import { getGif } from '../../helpers/getGif';

describe('Pruebas con getGif Fetch', () => {
  test('debe de traer 10 elementos', async () => {
    const gifs = await getGif('lost');
    expect(gifs.length).toBe(10);
  });

  test('debe de integrar los argumentos', async () => {
    const gifs = await getGif('');
    // console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
