  import express from "express";
  import cors from "cors"; 
  import { filmeRouter } from "./routes/filme.routes.js";

  const app = express();
  const port = 4000;

  app.use(cors());

  app.use(express.json());
  app.use(filmeRouter);

  app.listen(port, () => {
    console.log(`Aplicação ouvindo na porta ${port}`);
  });
