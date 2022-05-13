# API
### *O que é API?*
   * Application Programming Interface(Interface de Programação de Aplicações)  

   * Conjunto de especificações sobre as possíveis interações entre as aplicações

   * Documentação para desenvolvedor( rotas, parâmetros, tipos de retorno, informações sobre o funcionamento)

#

## REST 
* Representation State Transfer ( Transferência Representacional de Estado) 

* É um Modelo de Arquitetura

* Princípios Rest ( 6 )
   * Client x Server : Separa as responsabilidades, entre Cliente e Servidor  

   * Stateless :  Cliente pode realizar quantas requisições quiser ao servidor, porém o servidor não armazena nenhum estado. A cada requisição feita precisa-se passar todas as informações necessárias para que a requisição seja processada.

   * Cache : 

   * Interface Uniforme  
      * Identificação dos recursos  
         * http://urlexemplo.com/user/signup  
         * http://urlexemplo.com/products

      * Representação dos recursos : HTML, JSON, XML 
      * Mensagens auto-descritivas 
      * HATEOAS (Hypertext As The Engine of Application State)
   
   * Camadas 
   * Código Sob Demanda

#
   ## Requisições HTTP
   * GET - Leitura
   * POST - Criação
   * PUT - Atualização
   * DELETE - Deleção
# 

   ## HTTP CODES
   ```
    1XX : Informativo - a solicitção foi aceita ou processo continua em andamento

    2XX : Confirmação
      - 200 - Requisição bem sucedida
      - 201 - Created - Geralmente usado para POST após uma inserção

    3XX : Redirecionamento
      - 301 - Moved Permanently
      - 302 - Moved

    4XX : Erro do cliente
      - 400 - Bad Request
      - 401 - Unauthorized
      - 403 - Forbidden
      - 404 - Not Found
      - 422 - Unprocessable Entity

    5XX : Erro no Servidor - Servidor falhou ao concluir a solicitação
      - 500 - Internal Server Error
      - 502 - Bad Gateway

   ```
#

## Parâmetros das Requisições

- Header Params - Token, etc

- Query Params - Chave, Valor e Separação(&)  
   http://urlexemplo.com/products?page=2&limit=20  
   Nesta URL exemplo:  
    Chave = page / limit  
    Valor = 2 / 20  
    Separação = &  
      
- Route Params - parâmetros que vão em meio a rota
 http://urlexemplo.com/products/{id}

- Body Params

#



