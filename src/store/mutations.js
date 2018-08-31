import cars from '../source/data.js'
import {createPath, setLocalStorage} from "../utils/utils.js";

export const filterPriceMutation = (state, vals) => {
    
    // build path
    state.path.price_start = vals[0];
    state.path.price_end = vals[1];
    
    // create path
    history.pushState(null, null, createPath(state.path));
    
    // filtering cars
    state.cars = state.cars.filter( iter => iter.price > vals[0] && iter.price < vals[1]);
    
    // marked filter
    state.filters.filter_price = true;
    
    // sync with localStorage
    setLocalStorage(state.path, state.filters, state.cars);
    
    // return new copy state
    return Object.assign({}, state);
};

export const filterModelMutation = (state, val) => {
    // filtering to fields
    if (val !== '') state.cars = state.cars.filter(iter => iter.model === val);
    else state.cars = cars;
    
    // build path
    state.path.model = val;
    
    // create path
    history.pushState(null, null, createPath(state.path));
    
    // marked filter
    val === '' ? state.filters.filter_model = false : state.filters.filter_model = true;
    
    // sync with localStorage
    setLocalStorage(state.path, state.filters, state.cars);
    
    // return new copy state
    return Object.assign({}, state);
};

export const filterColorMutation = (state, val) => {
    // filtering to fields
    if (val !== '') state.cars = state.cars.filter(iter => iter.color === val);
    
    // build path
    state.path.color = val;
    
    // create path
    history.pushState(null, null, createPath(state.path));
    
    // marked filter
    state.filters.filter_color = true;
    
    // sync with localStorage
    setLocalStorage(state.path, state.filters, state.cars);
    
    // return new copy state
    return Object.assign({}, state);
};

export const searchMutation = (state, vals) => {
    // filtering to fields
    if (vals[0] !== '') state.cars = state.cars.filter(iter => iter.price === parseInt(vals[0]));
    if (vals[1] !== '') state.cars = state.cars.filter(iter => iter.make === vals[1]);
    if (vals[2] !== '') state.cars = state.cars.filter(iter => iter.model === vals[2]);
    if (vals[3] !== '') state.cars = state.cars.filter(iter => iter.color === vals[3]);
    
    // return new copy state
    return Object.assign({}, state);
};