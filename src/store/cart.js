import { makeAutoObservable } from 'mobx';

export default class Cart {
  items = [
    { id: 100, cnt: 3 },
    { id: 101, cnt: 1 }
  ];

  get total () {
    return 0;
    /* return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0); */
  }

  inCart (id) {
    return this.items.some(item => item.id == id);
  }

  change = (id, cnt) => {
    /* let product = this.products.find(pr => pr.id == id);

		if(product !== undefined){
			product.cnt = Math.max(1, Math.min(product.rest, cnt));
		} */
  };

  remove = (id) => {
    /* this.products = this.products.filter(pr => pr.id !== id); */
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
