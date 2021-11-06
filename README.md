# Token JWT
##### Gerando token JWT para login

- Clona o ropositório

  ```bash
  git clone https://github.com/Jefersonwork/jwt-token.git
  ```

- Entrar na pasta do projeto

  ```bash
  cd jwt-token
  ```

- Instalar as dependências do projeto
 
   * yarn
  ```bash
  yarn install
  ```

  * npm
  ```bash
  npm install
  ```
- Rodar o projeto
 
   * yarn
  ```bash
  yarn start
  ```

  * npm
  ```bash
  npm run start
  ```
###### o terminal deverá retorna o seginte console
```bash
Compiled successfully!

You can now view timeline in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.17.136:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

###### O teste deve ser feito usando o Postman ou alguma ferramenta do tipo

- Faz um post na http://localhost:3000/login usando um json com user: tarley e pwd: '123'