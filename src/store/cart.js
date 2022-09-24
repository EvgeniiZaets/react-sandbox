import { makeAutoObservable, runInAction } from 'mobx';

// tmp
const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default class Cart {
  items = [
    // { id: 100, cnt: 3 },
    // { id: 101, cnt: 1 }
  ];

  // private field
  #token = null;

  get itemsDetailed () {
    return this.items.map(item => {
      return { ...item, ...this.rootStore.products.product(item.id) };
    });
  }

  get cnt () {
    return this.items.reduce((sum, pr) => sum + pr.cnt, 0);
  }

  get total () {
    return this.itemsDetailed.reduce((sum, pr) => {
      return sum + pr.price * pr.cnt;
    }, 0);
  }

  inCart (id) {
    return this.items.some(item => item.id === parseInt(id));
  }

  change = async (id, cnt) => {
    const item = this.items.find(item => item.id === parseInt(id));

    if (item !== undefined) {
      const itemDetailed = this.itemsDetailed.find(item => item.id);
      const realCnt = Math.max(1, Math.min(itemDetailed.rest, cnt));
      if (realCnt !== parseInt(item.cnt)) {
        const response = await fetch(`${BASEURL}change.php?token=${this.#token}&id=${item.id}&cnt=${realCnt}`);
        const res = await response.json();

        if (res) {
          item.cnt = realCnt;
        }
      }
    }
  };

  add = async (id) => {
    if (!this.inCart(id)) {
      const response = await fetch(`${BASEURL}add.php?token=${this.#token}&id=${id}`);
      const res = await response.json();

      if (res) {
        this.items.push({ id, cnt: 1 });
      }
    }
  };

  remove = async (id) => {
    if (this.inCart(id)) {
      const response = await fetch(`${BASEURL}remove.php?token=${this.#token}&id=${id}`);
      const res = await response.json();

      if (res) {
        this.items = this.items.filter(pr => pr.id !== id);
      }
    }
  };

  async load () {
    const currentToken = this.rootStore.storage.getItem('CART__TOKEN');
    // fetch('http://faceprog.ru/reactcourseapi/products/all.php');
    const response = await fetch(`${BASEURL}load.php?token=${currentToken}`);
    const { cart, token, needUpdate } = await response.json();

    if (needUpdate) {
      this.rootStore.storage.setItem('CART__TOKEN', token);
    }

    runInAction(() => {
      this.items = cart;
      this.#token = token;
    });
  }

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
