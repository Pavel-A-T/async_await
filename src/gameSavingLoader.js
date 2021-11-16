import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    const reading = await read();
    const jsonResult = await json(reading);
    return new GameSaving(JSON.parse(jsonResult));
  }
}
