const express = require("express");
const path = require("node:path");
const routes = require("./routes");

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configuração dos Formulários HTML
app.use(express.urlencoded({ extended: true }));

// Configuração dos arquivos estáticos
app.use(express.static("public"));

// Rotas da aplicação
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost/${PORT}`);
});
