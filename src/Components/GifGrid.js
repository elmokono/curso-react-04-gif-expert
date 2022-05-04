import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from "../Hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    const { loading, data: images } = useFetchGifs(category); //custom hook

    return (
        <div>
            <h3>{category}</h3>
            { loading && <p className='animate__flash'>Loading</p> }
            <div className='card-grid'>
                {images.map((img) => {
                    return (<GifGridItem key={img.id} {...img} />)
                })}

            </div>
        </div>
    )
}
