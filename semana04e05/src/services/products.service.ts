import ProductRepository from '../repositories/product.repository';
import { Product } from '../models/products.model'


export class ProductService {
  getAll() {
    const products = ProductRepository.getAll()
    if (!products) throw new Error("Não existe nenhum produto cadastrado");
    return products;
  }

  getBydocument(document: string) {
    return ProductRepository.getByDocument(document)
  }

  create(product: typeof Product) {
    return ProductRepository.create(product)
  }

  update(document: string, product: typeof Product) {
    return ProductRepository.update(document, product)
  }

  remove(document: string) {

    return ProductRepository.remove(document)
  }
}

export default new ProductService();