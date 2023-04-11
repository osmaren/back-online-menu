<h1 align="center" id="top">Backend App <span style="color:#10BEF5">Online Menu</span></h1>
<p align="center">Online Menu</p>
<br>
<br>
<p align="center">
<h3 align="left">
<span style="color:#10BEF5"><em>Online Menu</em></span> é uma aplicação de gerenciamento que organiza um cardápio online.
</h3>


## ⚠ Antes de iniciar

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

E uma ferramenta para operar a aplicação, sugerirmos o VS Code.
[VSCode](https://code.visualstudio.com/).


## 📦 Requerimentos

Node, express, mongoose, jsonwebtoken, bcryptjs, mongodb, ts-node-dev e docker.


## 🚦 Avisos

Por favor, para uma maior estabilidade, use node versão 16 ou superior.

SE você não sabe qual versão está em uso na sua máquina, digite isto em seu terminal:

```bash
node --version
```

SE você deseja mudar a versão do Node,
digite isto em seu terminal:

```bash
nvm use 19
```

Verifique se não há nenhuma outra aplicação que está sendo executada na porta :3000 e na porta :27017

Para ter certeza de que nada está sendo executado nestas portas, digite em seu terminal:

```bash
sudo lsof -i :3000
```

```bash
sudo lsof -i :27017
```

Se você encontrar alguma aplicação sendo executada, termine o processo com o seguinte comando(digite o PID):

```bash
sudo kill -9 PID
```

## 🎲 Instalação

Para iniciar o projeto na sua máquina, é necessário que sua máquina tenha instalado npm e o git, além de uma versão do node compativel.

Começe clonando o repositório usando git clone:

```
git clone https://github.com/osmaren/back-online-menu.git
```

Depois disso, digite <em>npm</em> (ou <em>npm install</em>) para instalar todas as dependências:

```bash
npm
```


Para iniciar a aplicação em sua máquina local, digite em seu terminal:

```bash
npm start
```

## Alternativa
<h3>É possível iniciar o projeto diretamente com o docker. Sem necessidade de instalação, basta ter o docker instalado.</h3>

Para iniciar digite isto no seu terminal:

```bash
 docker-compose up --build
```


### <h2> 🛠 Tecnologias </h2>

As seguintes ferramentas foram usadas na construção do projeto:

- bcryptjs: biblioteca utilizada para criptografar senhas de usuários, garantindo a segurança da informação.
- express: framework utilizado para criar e gerenciar rotas HTTP, tornando o desenvolvimento de APIs mais fácil e eficiente.
- jsonwebtoken: biblioteca utilizada para implementar autenticação baseada em tokens JWT (JSON Web Tokens), que é uma forma segura e escalável de autenticação de usuários.
- mongoose: biblioteca utilizada para interagir com bancos de dados MongoDB, fornecendo uma camada de abstração que torna a interação com o banco de dados mais fácil e intuitiva.
- typescript: superset do JavaScript que adiciona recursos de tipagem estática, fornecendo assim uma forma mais segura e robusta de desenvolvimento. Além disso, o TypeScript fornece ferramentas de desenvolvimento mais avançadas, como autocompletar de código e detecção de erros em tempo de compilação.
- Insomnia: cliente HTTP utilizado para testar e debugar APIs de forma eficiente e organizada.
- MongoDB: banco de dados NoSQL utilizado para armazenar e gerenciar dados em formato de documentos, fornecendo uma alta escalabilidade e flexibilidade para aplicações que precisam lidar com grandes volumes de dados.

### <h2> 📋 Termos de uso </h2>

<p>Este projeto é um projeto <em>opensource</em> com fins educacionais e não possui nenhuma finalidade comercial.</p>

<div align="center">
  <a href="https://choosealicense.com/licenses/mit/" target="_blank"><img src="https://img.shields.io/static/v1?label=License&message=MIT&color=informational"></a>
 </div>


<h2 id="desenvolvedores">🧑‍💻 Colaboradores:</h2>
<br>
<div align="center">
<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/osmaren">
      <img src="https://avatars.githubusercontent.com/u/82000434?v=4" style="border-radius: 50%" width="100px" alt="Imagem do perfil de Osmar"/>
      <br />
      <sub><b>Osmar E. Nothaft</b></sub>
      <br />
    </td>
</table>
</div>

[Voltar para o topo 🔝](#top)
