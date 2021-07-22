# Template Padrão Mobile | EJCM

Nessa branch pode ser encontrado o template padrão usado na EJCM para criação de projetos mobile em React Native e Node.js.

![Badge](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

 
## Tabela de Conteúdo

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Instalação](#instalação)
 3. [Configuração](#configuração)
 4. [Uso](#uso)
 5. [Fluxo do Git](#fluxo-do-git)
 6. [Documentação Iniciativas](#documentação-iniciativas)
 
## Tecnologias utilizadas

Essas são as frameworks que você precisará instalar para desenvolver esse projeto:

- [React](https://pt-br.reactjs.org/docs/getting-started.html), *versão 16.13.1*
- [Node](https://nodejs.org/en/docs/), *versão  12.14.1*
- [Expo](https://docs.expo.io/), *versão 3.21.5*

Outras tecnologias interessantes que foram implementadas:
- [NPM](https://www.npmjs.com/package/documentation), *versão 6.13.4*

## Instalação 

Após clonado, os comandos a seguir devem ser rodados para instalação do projeto.

**Na pasta principal, apague a pasta .git, inicialize um novo repositório git e verifique se o package.json foi atualizado com a nova url. Caso não, atualize manualmente porque isso é fundamental para o funcionamento das dependências.**

``` bash
$ rm -r .git
$ git init
$ git remote add origin link-do-seu-repositorio
```

Após isso, instale as dependências
``` bash
$ npm install
```

**Na pasta nomeada como “frontend”:**

``` bash
$ npm install
```

**Na pasta nomeada como “backend”:**

``` bash
$ node template.js
$ npm init
$ npm install express sequelize dotenv  --save
```

## Configuração

Veremos a seguir as configurações necessárias para o backend do projeto.

Através do [phpmyadmin](http://localhost/phpmyadmin/index.php) uma nova database deve ser criada e nomeada e para a codificação usaremos preferencialmente *utf8_unicode_ci*.

**Na pasta nomeada como “backend”:**
``` bash
$ cp .env.example .env
$ node src/app.js
```

No arquivo "package.json", na seção de *scripts* adicionar:
> "start": "node src/app.js", <br/>
> "dev": "node-dev --no-notify scr/app.js", <br/>
> "migrate": "node src/database/migrate.js", <br/>
> "seed": "node src/database/seeders/seeder.js" <br/>


## Uso

**Na pasta nomeada como “backend”:**
``` bash
$ npm run start
```

**Na pasta nomeada como “frontend”:**
``` bash
$ expo start
```

## Fluxo do Git

*Para enviar suas alterações para o GitLab, seus commits vão ser lintados(validados) e seguirão a especificação de commits definida para a EJCM. Basta seguir todo o fluxo de push, com a diferença de que o ***git commit*** será substituído por ***npm run commit***.*

```bash
$ git add .
$ npm run commit
$ git push origin sua-branch
```
*Ao executar ***npm run commit*** vão ser oferecidas opções para montagem do seu commit no formato especificado acima. Você pode encontrar um exemplo na branch ***padroes-git***.*

## Documentação Iniciativas

- [React](https://www.notion.so/Iniciativa-React-a5b446fc4f7b49b69c62bd3cff73b66a)
- [Node](https://www.notion.so/febd87aaa6614ab4b292f80eeaf35716?v=525b2450d32044cfb1596af3059dbf41)

## Última atualização: 16/06/2021
