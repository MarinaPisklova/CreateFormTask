import { makeAutoObservable } from "mobx";

class Store {
  orderItems = [
    {
      id: 0,
      name: "The Chelsea Boot",
      material: "Black",
      quantity: 1,
      cost: 235,
      img: "./images/img1.png"
    },
    {
      id: 1,
      name: "The Twill Snap Backpack",
      material: "Reverse Denim + Brown leather",
      quantity: 1,
      cost: 65,
      img: "./images/img2.png",
    },
    {
      id: 2,
      name: "The Twill Zip Tote",
      material: "Reverse Denim + Brown leather",
      quantity: 1,
      cost: 48,
      img: "./images/img3.png",
    }
  ];

  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log(this.count)
  }

  add(){
    this.orderItems.push(this.orderItems[0]);
  }

}

export default new Store();