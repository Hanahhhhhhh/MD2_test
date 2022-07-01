export class Product{
    private _id: number = 0;
    private _name: string;
    private _typeProduct: string;
    private _price: number;
    private _amount: number;
    private _date: number;
    private _description: string;


    constructor(name: string, typeProduct: string, price: number, amount: number, date: number, description: string) {
        this._name = name;
        this._typeProduct = typeProduct;
        this._price = price;
        this._amount = amount;
        this._date = date;
        this._description = description;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get typeProduct(): string {
        return this._typeProduct;
    }

    set typeProduct(value: string) {
        this._typeProduct = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}