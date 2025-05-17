Projeto de Gerenciador de Produtos usando Angular no frontend e Yii2 no Backend
com Mysql

Video demonstrando o projeto: https://youtu.be/q3D_EfV2Zy0

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js (versão 16 ou superior)

Angular CLI (versão 17 ou superior)

PHP (versão 8.0 ou superior)

Composer (gerenciador de dependências PHP)

MySQL ou outro sistema de gerenciamento de banco de dados compatível

Passo a passo de como rodar o projeto:

Frontend: Na pasta do frontend, instalar as dependências do projeto com o comando: "npm install".

Em seguida, iniciar o angular com o comando: "ng serve".

Backend: Na pasta do backend, instalar as dependências do projeto com o Composer com o comando: "composer install".

Ajustar as informações do seu banco de dados no arquivo "db.php", como o username e senha.

Executar as migrações para criar o banco de dados e as tabelas com o comando: "php yii migrate".

Por fim, iniciar o servidor PHP para rodar a API na porta 8080 com o comando: "php yii serve".
