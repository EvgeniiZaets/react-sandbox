import { makeAutoObservable, runInAction } from 'mobx';

export default class Products {
  products = [];

  async load () {
    const response = await fetch('http://faceprog.ru/reactcourseapi/products/all.php');
    const products = await response.json();

    runInAction(() => {
      this.products = products;
    });
  }

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get product () {
    return id => this.products.find(product => product.id === parseInt(id));
  }
}
