import { makeAutoObservable } from 'mobx';

export default class Cart {
  items = [
    // { id: 100, cnt: 3 },
    // { id: 101, cnt: 1 }
  ];

  get cnt () {
    return this.items.reduce((sum, pr) => sum + pr.cnt, 0);
  }

  get total () {
    return this.items.reduce((sum, pr) => {
      return sum + this.rootStore.products.product(pr.id).price * pr.cnt;
    }, 0);
  }

  inCart (id) {
    return this.items.some(item => item.id === parseInt(id));
  }

  change = (id, cnt) => {
  //   const item = this.items.find(pr => pr.id === parseInt(id));
  //
  //   if (item !== undefined) {
  //     item.cnt = Math.max(1, Math.min(this.rootStore.products.product(id).rest, cnt));
  //   }
  };

  increaseCnt = (id) => {
    const item = this.items.find(pr => pr.id === parseInt(id));

    if (item !== undefined) {
      item.cnt = Math.max(1, Math.min(this.rootStore.products.product(id).rest, item.cnt + 1));
    }
  };

  decreaseCnt = (id) => {
    const item = this.items.find(pr => pr.id === parseInt(id));

    if (item !== undefined) {
      item.cnt = Math.max(1, Math.min(this.rootStore.products.product(id).rest, item.cnt - 1));
    }
  };

  add = (id) => {
    // const product = this.items.find(pr => pr.id === parseInt(id));
    this.items.push({ id, cnt: 1 });
  };

  remove = (id) => {
    this.items = this.items.filter(pr => pr.id !== id);
  };

  constructor (rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

/*
	get inCart(){
		return id => this.items.some(item => item.id == id);
	}
*/

/* products
	id_product
	title
	...

carts
	id_cart
	id_user (null)
	token (null)

products_carts
	id_cart
	id_product
	cnt

	1 2 3
	1 10 1
	2 2 1 */
