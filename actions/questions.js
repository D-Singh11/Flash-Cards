export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestionAction(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}