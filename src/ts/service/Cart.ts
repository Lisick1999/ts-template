import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amount(): number {
        let total = 0; 
        this.items.forEach((item) => {
            total += item.price;
        });
        return total;
    }

    discountedAmount(discount: number): number {
        return (this.amount() * (100 - discount)) / 100;
    }

    remove(id: number): void {
        if (!this.items.length) return;
        this._items = this.items.filter((item) => item.id !== id);
    }
}