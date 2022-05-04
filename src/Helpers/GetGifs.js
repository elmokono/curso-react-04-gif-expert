export const getGifs = async (category) => {

    const getUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=0BFsksrN4Q4gy2yYdRUiUVg3B5G8hdJI`;
    const resp = await fetch(getUrl);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    return gifs;
}