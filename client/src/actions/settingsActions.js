import 'isomorphic-fetch';

export function changeSettings(newSettings) {
  return {
    type: "CHANGE_SETTINGS",
    settings: newSettings
  }
}
