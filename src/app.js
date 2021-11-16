import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    const result = await GameSavingLoader.load();
    localStorage.setItem('GameSaving', result);
  } catch (error) {
    throw new Error(error);
  }
})();
