import { action, observable } from 'mobx'

class Store {
  @observable accessor count = 0;

  @action increment = () => {
    this.count++
  }
}

export const store = new Store()