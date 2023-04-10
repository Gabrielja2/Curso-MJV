import { isValidObjectId } from 'mongoose';
import { Product } from '../models/products.model'

class ProductRepository {
  getAll() {
    return Product.find()
  }

  getByDocument(document: string) {
    return Product.findOne({ document: document })
  }

  create(product: typeof Product) {
    return Product.create(product);
  }

  update(document: string, product: Partial<typeof Product>) {
    if (!isValidObjectId(document)) throw new Error('Invalid document')
    return Product.findByIdAndUpdate(document, product)
  }

  remove(document: string) {
    if (!isValidObjectId(document)) throw new Error('Invalid document')
    return Product.findByIdAndRemove(document)
  }
}

export default new ProductRepository;