import Buyable from './Buyable';

export default class Smartfone implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly manyTimes: boolean,
    readonly quanitty?: number
  ) {
    this.quanitty = 1;
  }
}
