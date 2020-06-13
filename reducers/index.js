import { ADD_DECK, RETREIVE_DECKS, retreiveAll_API_Decks__SaveToStoreAction } from '../actions/decks';
import { ADD_QUESTION } from '../actions/questions';

function decks(state = {}, action) {
    switch (action.type) {
        case RETREIVE_DECKS:                    // populate/ apply initial state to the redux store
            return {
                ...state,
                ...action.decks
            }

        case ADD_DECK:                              // Add new deck to redux store
            const newDeck = {
                title: action.deckTitle,
                questions: []                                       // add empty questions array to the deck which will be updated when new question is added
            }

            return {
                ...state,
                [action.deckTitle]: newDeck                        // create new property on state with decktitle and store new deck in it
            }

        case ADD_QUESTION:

            return {
                ...state,
                [action.deckTitle]: {
                    ...state[action.deckTitle],
                    questions: [...state[action.deckTitle].questions, action.question]
                }
            }

        default:
            return state;
    }
}