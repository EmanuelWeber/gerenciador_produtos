# 📦 Gerenciador de Produtos  
Projeto full-stack com **Angular (Frontend)**, **Yii2 (Backend)** e **MySQL**.

🎥 **Demonstração em vídeo**: [Assista aqui](https://youtu.be/q3D_EfV2Zy0)

---

## 🛠️ Pré-requisitos

Antes de começar, verifique se você tem os seguintes itens instalados na sua máquina:

- ✅ [Node.js](https://nodejs.org/) (versão **16** ou superior)  
- ✅ [Angular CLI](https://angular.io/cli) (versão **17** ou superior)  
- ✅ [PHP](https://www.php.net/) (versão **8.0** ou superior)  
- ✅ [Composer](https://getcomposer.org/) (gerenciador de dependências do PHP)  
- ✅ [MySQL](https://www.mysql.com/) ou outro banco de dados compatível

---

## 🚀 Como rodar o projeto

### 🔹 1. Frontend (Angular)

1. Acesse a pasta do frontend:
   ```bash
   cd Frontend/
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor Angular:
   ```bash
   ng serve
   ```

   > O projeto estará disponível em `http://localhost:4200/`

---

### 🔸 2. Backend (Yii2)

1. Acesse a pasta do backend:
   ```bash
   cd Backend/
   ```

2. Instale as dependências com o Composer:
   ```bash
   composer install
   ```

3. Configure o banco de dados:

   Edite o arquivo `config/db.php` com suas credenciais do MySQL:

   ```php
   return [
       'class' => 'yii\db\Connection',
       'dsn' => 'mysql:host=localhost;dbname=nome_do_banco',
       'username' => 'seu_usuario',
       'password' => 'sua_senha',
       'charset' => 'utf8',
   ];
   ```

4. Execute as migrações para criar as tabelas no banco:
   ```bash
   php yii migrate
   ```

5. Inicie o servidor PHP para rodar a API:
   ```bash
   php yii serve
   ```

   > A API estará disponível em `http://localhost:8080/`

---

## 📁 Estrutura do Projeto

```
/Backend   → API em Yii2 (PHP)
/Frontend  → Interface em Angular
```

---

## 📬 Contato

Em caso de dúvidas ou sugestões, fique à vontade para entrar em contato!
