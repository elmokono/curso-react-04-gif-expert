import { useEffect, useState } from "react"
import { getGifs } from '../Helpers/GetGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({ data: [], loading: true }); //initial state

    useEffect(() => {
        getGifs(category).then(x => {
            setState({
                data: x,
                loading: false,
            });
        })
    }, [category]);

    //console.log(category, state.loading);
    return state;
}