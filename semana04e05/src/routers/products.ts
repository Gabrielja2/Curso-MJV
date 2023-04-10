import { Request, Response, Router } from "express";
import ProductService from "../services/products.service";

const productsRouter: Router = Router();

productsRouter.get('/', async (req: Request, res: Response) => {
  const products = await ProductService.getAll();
  console.log(products);

  res.status(200).json(products)

});

productsRouter.get('/:id', async (req: Request, res: Response) => {
  const products = await ProductService.getBydocument(req.params.id);
  if (!products) return res.status(404).json({ message: "Product not found" })
  res.status(200).json(products)
});

productsRouter.post('/', async (req: Request, res: Response) => {
  const newProduct = req.body;
  if (newProduct.quantity <= 0) {
    res.status(400).json({ message: "Quantidade do produto inválida" })
  }

  await ProductService.create(newProduct)
  res.status(201).json({ message: "Produto cadastrado com sucesso!" });
});

productsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await ProductService.update(id, req.body)
    res.status(200).json({ message: "Produto editado com sucesso!" })
  } catch (error: any) {
    res.status(400).json(error.message)
  }
})

productsRouter.delete('/remove/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await ProductService.remove(id)
    res.status(200).json({ message: "Produto removido com sucesso!" });
  } catch (error: any) {
    res.status(400).json(error.message);
  }
});

export default productsRouter;  