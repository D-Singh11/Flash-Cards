export const RETREIVE_DECKS = 'RETREIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
import { getDecks, saveDeckTitle } from '../utils/api';

export function addDeckAction(deckTitle) {
    return {
        type: ADD_DECK,
        deckTitle
    }
}

export function retreiveAll_API_Decks__SaveToStoreAction(decks) {
    return {
        type: RETREIVE_DECKS,
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

// thunked action creator to save new deck's title to backend api and then also update the redux store
export function handleAddDeck(deckTitle) {
    return (dispatch) => {
        return saveDeckTitle(deckTitle).then(response => {
            dispatch(addDeckAction(deckTitle));
            const deck = JSON.parse(response);
            console.log(deck);
        })
    }
}