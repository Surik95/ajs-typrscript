import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    if (
      this._items.findIndex((items: Buyable) => item.id === items.id) === -1
    ) {
      this._items.push(item);
    } else {
      this._items.forEach((items: Buyable) => {
        if ('manyTimes' in item && items.id === item.id && items.quanitty) {
          (items.price += item.price), (items.quanitty += 1);
        }
      });
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  wholeSumm(sale: number = 0): number {
    let price: number = 0;
    price = this._items.reduce(
      (sum: number, current: Buyable) => sum + current.price,
      price
    );
    price = price - (price * sale) / 100;
    return price;
  }

  deleateProduct(id: number): void {
    this._items.forEach((items: Buyable, index: number) => {
      if (items.id === id) {
        if ('manyTimes' in items && items.quanitty && items.quanitty > 1) {
          items.quanitty -= 1;
        } else {
          this._items.splice(index, 1);
        }
      }
    });
  }
}
