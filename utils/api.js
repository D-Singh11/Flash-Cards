import { AsyncStorage } from 'react-native';

const FLASHCARD_STORAGE_KEY = 'flashcards';


//@return all of the decks along with their titles, questions, and answers
export function getDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
}


//getDeck: take in a single id argument and return the deck associated with that id.
// @param : deckId
//return : Deck linked to that id
export function getDeck(deckId) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results);
            const response = data[deckId];
            return response;
        })
}


//saveDeckTitle: take in a single title argument and add it to the decks.
export function saveDeckTitle(deckTitle) {
    const newDeck = {
        title: deckTitle,
        questions: []
    }

    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [deckTitle]: newDeck
    }));
}


//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck(deckTitle, questionCard) {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            let data = JSON.parse(results);
            console.log("old data:   ",data);
            const questions = [...data[deckTitle].questions, questionCard]


            const deck = {
                questions: questions
            }           // add question to questions aray linked to decTitle
            // console.log(deck);
            // let updatedData = {
            //     ...data,
            //     [deckTitle]: {
            //         ...data[deckTitle],
            //         questions: [...data[deckTitle].questions, questionCard]
            //     }
            // }
            AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
                [deckTitle] : deck
            }));               // save the added data to the Asyncstorage
        })

}
