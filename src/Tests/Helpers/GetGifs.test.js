import { getGifs } from "../../Helpers/GetGifs"

describe('pruebas en el getGifs', () => {

    test('should retrieve 5 elements', async () => {
        const gifs = await getGifs('Saitama');
        expect(gifs.length).toBe(5);
    })

    test('should retrieve 5 elements empty arg', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})