import { makeAutoObservable } from "mobx";

interface IState {
  shipping: {
    active: boolean,
    next: string
  }
  billing:  {
    active: boolean,
    next: string
  };
  payment: {
    active: boolean,
    next: string
  };
}

class AppStore {
  state: IState = {
    shipping: {
      active: false,
      next: "billing"
    },
    billing: {
      active: false,
      next: "payment"
    },
    payment: {
      active: true,
      next: "success"
    },
  }

  constructor() {
    makeAutoObservable(this);
  }

  submit(name:string) {
    this.state[name as keyof IState].active = false;
    let nextName = this.state[name as keyof IState].next;
    this.state[nextName as keyof IState].active = true;
  }

  handleClick(name:string){
    this.setAllFalse();
    this.state[name as keyof IState].active = true;
  }

  setAllFalse(){
    this.state.shipping.active = false;
    this.state.billing.active = false;
    this.state.payment.active = false;
  }

}

export default new AppStore();