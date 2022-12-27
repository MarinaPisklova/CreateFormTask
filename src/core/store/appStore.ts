import { makeAutoObservable } from "mobx";

export interface IState {
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
  success: {
    active: boolean,
    next: string
  };
}

class AppStore {
  state: IState = {
    shipping: {
      active: true,
      next: "billing"
    },
    billing: {
      active: false,
      next: "payment"
    },
    payment: {
      active: false,
      next: "success"
    },
    success: {
      active: false,
      next: ""
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
}

export default new AppStore();