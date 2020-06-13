export const RETREIVE_DECKS = 'RETREIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

export function addDeckAction(deckTitle) {
    return {
        ADD_DECK,
        deckTitle
    }
}

export function retreiveAll_API_Decks__SaveToStoreAction(deckTitle, decks) {
    return {
        RETREIVE_DECKS,
        decks
    }
}