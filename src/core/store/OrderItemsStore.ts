import { makeAutoObservable } from "mobx";

export interface IOrderItem {
  id: number,
  name: string,
  material: string,
  quantity: number,
  cost: number,
  img: string
}

class OrderItemsStore {
  orderItems: IOrderItem[] = [
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
  taxes: number = 12.12;
  editMode: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  }

  deleteItem(id:number){
    this.orderItems = this.orderItems.filter(item => item.id != id);
  }
}

export default new OrderItemsStore();