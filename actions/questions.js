import { addCardToDeck } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestionAction(deckId, question) {
    return {
        type: ADD_QUESTION,
        deckTitle:deckId,
        question
    }
}


// thunked action creator to save new question/card of deck to backend api and then also update the redux store
export function handleAddQuestion(deckId, question) {
    return (dispatch) => {
        return addCardToDeck(deckId, question).then(response => {
            dispatch(addQuestionAction(deckId, question));
        }).catch(error=>{
            console.log('Error: card not saved, try again');
        })
    }
}