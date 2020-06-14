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
            let deck = data[deckTitle];
            deck.questions = [...data[deckTitle].questions, questionCard];               // add question to questions aray linked to decTitle

            AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({                              // save/merge into existing the added data to the Asyncstorage
                // [deckTitle]: deck                                                                   // this will work only on slecteded dec. operate only only selected deck        
                ...data,
                [deckTitle]: deck                                                                      // this one assigns whole new state again like redux does. assign whole state eventhough only one deck is being updated
            }));
        })

}
