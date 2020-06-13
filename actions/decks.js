export const RETREIVE_DECKS = 'RETREIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
import { getDecks } from '../utils/api';

export function addDeckAction(deckTitle) {
    return {
        ADD_DECK,
        deckTitle
    }
}

export function retreiveAll_API_Decks__SaveToStoreAction(decks) {
    return {
        RETREIVE_DECKS,
        decks
    }
}


// thunked action creator to get data from api and save in redux store
export function handleInitialData() {
    return (dispatch) => {
        return getDecks().then(response => {
            const decks = JSON.parse(response);
            dispatch(retreiveAll_API_Decks__SaveToStoreAction(decks));
        })
    }
}