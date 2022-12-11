export const SET_INIT_COUNTDOWN_SECONDS = 'SET_INIT_COUNTDOWN_SECONDS'
export const INIT_COUNTDOWN_SECONDS = 15

export const initCountdownSecondsReducer = (initCountdownSeconds = INIT_COUNTDOWN_SECONDS, action) => {
  switch (action.type) {
    case SET_INIT_COUNTDOWN_SECONDS:
      return action.value
    default:
      return initCountdownSeconds
  }
}