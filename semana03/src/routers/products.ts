import { Request, Response, Router } from "express";
import { products } from "../utils/products";

const productsRouter: Router = Router();

productsRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json(products);
});

productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct = req.body;

  if (newProduct.quantity <= 0) {
    res.status(400).json({ message: "Quantidade do produto inválida" })
  }
  products.push(newProduct);
  res.status(201).json({ message: "Produto cadastrado com sucesso!" });
});

productsRouter.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const productToEditIndex = products.findIndex((prod) => prod.id === Number(id))

  if (productToEditIndex === -1) {
    return res.status(400).json({ message: "Produto não encontrado." });
  }

  products[productToEditIndex] = req.body

  res.status(200).json({ message: "Produto editado com sucesso!" })
})

productsRouter.delete('/remove/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const productToRemoveIndex = products.findIndex((prod) => prod.id === Number(id))

  if (productToRemoveIndex === -1) {
    return res.status(400).json({ message: "Produto não encontrado." });
  }

  products.splice(productToRemoveIndex, 1)


  res.status(200).json({ message: "Produto removido com sucesso!" });
});

export default productsRouter;  