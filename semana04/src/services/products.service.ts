import { Products } from '../models/products.model';
import { products } from "../utils/products";

export class ProductService {
  allProducts: Products[] = products

  getAll() {
    return this.allProducts;
  }

  getById(id: number) {
    const product = this.allProducts.find((prod) => prod.id === id)
    return product
  }

  create(document: Products) {
    this.allProducts.push(document)
  }

  update(id: number, product: Products) {
    const productToEditIndex = products.findIndex((prod) => prod.id === Number(id))

    if (productToEditIndex === -1) {
      throw new Error("Produto não encontrado.");
    }
    this.allProducts[productToEditIndex] = product
  }

  remove(id: number) {
    const productToRemoveIndex = products.findIndex((prod) => prod.id === id)
    if (productToRemoveIndex === -1) {
      throw new Error("Estudante não encontrador");
    }
    this.allProducts.splice(productToRemoveIndex, 1)
  }
}

export default new ProductService();