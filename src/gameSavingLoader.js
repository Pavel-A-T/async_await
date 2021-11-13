import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load(data) {
    const jsonData = JSON.stringify(data);
    const reading = await read(jsonData);
    const jsonResult = await json(reading);
    return jsonResult;
  }
}
