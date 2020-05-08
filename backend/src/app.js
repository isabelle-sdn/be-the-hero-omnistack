const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express({
    //origin:''
    //Aqui dentro vai ficar os controles de segurança referente a origem de acesso do app.
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//app.listen(3333); //porta localhost diferente do 8080

module.exports = app;

/**
 * Métodos HTTP:
 *Get: Buscar uma informação no BACK-END
 *POST: Cria uma informação no BACK-END
 *PUT:Altera uma informação no BACK-END
 *DELETE: Deleta uma informação no BACK-END

**/

/**
 * Tipos de parâmetros:
 * Query Params: Parâmtros nomeados enviados na rota após "?" (Usados em Filtros, paginações)
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 *
 * 
 */

 /**
  *Driver: script em SQL puro. [select * from tabela]
  *Query Builder: table('users').select(*).where
  */
 


