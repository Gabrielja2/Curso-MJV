import { Request, Response, Router } from "express";
import productsService from "../services/products.service";

const productsRouter: Router = Router();

productsRouter.get('/', (req: Request, res: Response) => {
  const products = productsService.getAll();
  res.status(200).json(products)
});

productsRouter.get('/:id', (req: Request, res: Response) => {
  const products = productsService.getById(Number(req.params.id));
  if (!products) return res.status(404).json({ message: "Product not found" })
  res.status(200).json(products)
});

productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct = req.body;
  if (newProduct.quantity <= 0) {
    res.status(400).json({ message: "Quantidade do produto inválida" })
  }

  productsService.create(newProduct)
  res.status(201).json({ message: "Produto cadastrado com sucesso!" });
});

productsRouter.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  try {
    productsService.update(Number(id), req.body)
    res.status(200).json({ message: "Produto editado com sucesso!" })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

productsRouter.delete('/remove/:id', (req: Request, res: Response) => {
  const { id } = req.params
  try {
    productsService.remove(Number(id))
    res.status(200).json({ message: "Produto removido com sucesso!" });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
});

export default productsRouter;  