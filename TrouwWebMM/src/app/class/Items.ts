export class Item {
    constructor(
      public id: number,
      public name: string,
      public quantity: number,
      public context: string,
      public price: number,
      public gekocht: boolean
    ) { }
  }