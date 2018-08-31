export const filterColorAction = async ({ commit }, val) => {
    await commit('filterColorMutation', val);
};

export const filterMakeAction = ({ state }) => {
    history.pushState(null,null,'?filter=make');
    return state.cars = [{id: 1, make: 'Porsheee', model: 'Turbo ee911', price: 100000, color: 'blaeeck'}];
};

export const filterModelAction = async ({ commit }, val) => {
    await commit('filterModelMutation', val);
};

export const filterPriceAction = async ({ commit }, vals) => {
    await commit('filterPriceMutation', vals);
};

export const searchAction = async ({ commit }, vals) => {
    await commit('searchMutation', vals);
};