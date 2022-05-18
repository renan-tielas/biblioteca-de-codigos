
## Laboratório do Código

Uma plataforma de aprendizado de desenvolvimento. Iniciando como projeto pessoal, busca organizar conhecimentos da área do desenvolvimento web de maneira estruturada, interativa e participativa. Com referências básicas de conceitos e trechos de código em português. Abordando linguagens, bibliotecas, frameworks e stacks front e back end. Assim como padrões de desenvolvimento e design, testagem, e outros tópicos. Em fase inicial de desenvolvimento.

## Print do layout inicial
![laboratorio0](https://user-images.githubusercontent.com/52353767/166739044-9becf9ef-5cd7-4f93-80f4-2f92beea70b2.png)



## Example app using MongoDB

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

## Deploy your own

Once you have access to the environment variables you'll need, deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mongodb&project-name=with-mongodb&repository-name=with-mongodb&env=MONGODB_URI&envDescription=Required%20to%20connect%20the%20app%20with%20MongoDB)


## Configuration

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

