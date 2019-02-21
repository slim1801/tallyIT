const ENTRY_DATE_TIME_CHANGED = "form/ENTRY_DATE_TIME_CHANGED";
const EXIT_DATE_TIME_CHANGED = "form/EXIT_DATE_TIME_CHANGED";

export function onEntryDateTimeChanged(payload) {
  return { type: ENTRY_DATE_TIME_CHANGED, payload };
}

export function onExitDateTimeChanged(payload) {
  return { type: EXIT_DATE_TIME_CHANGED, payload };
}

const initialState = {
  entryDateTime: "",
  exitDateTime: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ENTRY_DATE_TIME_CHANGED: {
      return { ...state, entryDateTime: action.payload };
    }
    case EXIT_DATE_TIME_CHANGED: {
      return { ...state, exitDateTime: action.payload };
    }
    default:
      return state;
  }
}
