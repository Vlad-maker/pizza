import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPizzas = () => (dispatch) => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
     });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

