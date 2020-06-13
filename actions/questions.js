export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestionAction(question) {
    return {
        ADD_QUESTION,
        question
    }
}