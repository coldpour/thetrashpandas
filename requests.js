const { TRELLO_KEY, TRELLO_TOKEN } = process.env;

const validate = { TRELLO_KEY, TRELLO_TOKEN };
const missing = Object.keys(validate).filter(k => validate[k] == null);
if (missing.length) {
  console.error(
    "Looks like you forgot to define the following env vars:",
    missing
  );
}

const DONE_COLUMN_ID = "59e8158817a54f10f9cc9405";

export const songsInDoneColumn = `https://api.trello.com/1/lists/${DONE_COLUMN_ID}/cards?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`;
