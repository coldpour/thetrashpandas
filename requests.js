const { TRELLO_KEY, TRELLO_TOKEN } = process.env;

const validate = { TRELLO_KEY, TRELLO_TOKEN };
const missing = Object.keys(validate).filter(k => validate[k] == null);
if (missing.length) {
  console.error(
    "Looks like you forgot to define the following env vars:",
    missing
  );
}

const WARM_UPS_COLUMN_ID = "5c5d019c202a84242d1beb1b";
const SONGS_BOARD_ID = "56b2c7c7a73b9eaf2d44253c";
const DONE_COLUMN_ID = "59e8158817a54f10f9cc9405";

export const cardsInColumn = columnId =>
  `https://api.trello.com/1/lists/${columnId}/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;

export const songsInDoneColumn = cardsInColumn(DONE_COLUMN_ID);
export const songsInWarmUpColumn = cardsInColumn(WARM_UPS_COLUMN_ID);
