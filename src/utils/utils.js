import convertCssColorNameToHex from 'convert-css-color-name-to-hex';
import cars from '../source/data.js';
const initState = {
    cars: cars,
    filters: {
        filter_price: false,
        filter_model: false,
        filter_make: false,
        filter_color: false,
    },
    path: {
        price_start: '',
        price_end: '',
        model: '',
        make: '',
        color: ''
    },
    colors: {
        Mauve: '#e0b0ff',
        Puce: '#cc8899'
    }
};

export const createPath = path => {
    return `?price_start=${path.price_start}?price_end=${path.price_end}?model=${path.model}?color=${path.color}?make=${path.make}`
} ;

 export const setLocalStorage = (path, filters, cars) => {
    localStorage.setItem('path', JSON.stringify(path));
    localStorage.setItem('filters', JSON.stringify(filters));
    localStorage.setItem('cars', JSON.stringify(cars));
};

export const getLocalStorage = key => {
    let result = JSON.parse(localStorage.getItem(`${key}`)) === null;
    return result ? initState[key] : JSON.parse(localStorage.getItem(`${key}`))
};

export const uniqueColors = arr => {
    // declare vars
    let count = 0;
    let proxyArr = [];
    let newArr = [];
    
    // create unique list colors
    for (let i = 0; i < arr.length; ++i) {
        if (proxyArr.indexOf(arr[i].color) === -1) {
            proxyArr.push(arr[i].color);
            ++count;
        } else {
            console.log('dubl')
        }
    }
    
    // reformat list colors
    for (let i = 0; i < proxyArr.length; ++i) {
        if (proxyArr[i] === 'Mauve') newArr.push({colorName: proxyArr[i], colorHex: initState.colors.Mauve});
        else if (proxyArr[i] === 'Puce') newArr.push({colorName: proxyArr[i], colorHex: initState.colors.Puce});
        else newArr.push({colorName: proxyArr[i], colorHex: convertCssColorNameToHex(proxyArr[i])})
    }
    
    return newArr;
    
};