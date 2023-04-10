import "dotenv/config";
import app from "./app";
import connection from "./config/connection";

const PORT = process.env.PORT || 3003;

connection.then(() => {
  console.log('Banco de dados conectado!')
  app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
}).catch((error) => console.log(error)
);




