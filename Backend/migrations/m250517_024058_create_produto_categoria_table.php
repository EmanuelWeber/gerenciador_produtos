<?php

use yii\db\Migration;

class m250517_024058_create_produto_categoria_table extends Migration
{
    public function safeUp()
    {
        $this->execute('CREATE DATABASE IF NOT EXISTS `gerenciador_produtos`');

        $this->execute('USE `gerenciador_produtos`');

        $this->createTable('categoria', [
            'id' => $this->primaryKey(),
            'nome' => $this->string(100)->notNull(),
        ]);

        $this->batchInsert('categoria', ['id', 'nome'], [
            [1, 'Esportes'],
            [2, 'Eletrônicos'],
            [3, 'Lazer']
        ]);

        $this->createTable('produtos', [
            'id' => $this->primaryKey(),
            'nome' => $this->string(200)->notNull(),
            'quantidade' => $this->integer()->notNull(),
            'idCategoria' => $this->integer()->notNull(),
            'criacao' => $this->dateTime()->null(),
        ]);

        $this->addForeignKey(
            'fk-produto-idCategoria',
            'produtos',
            'idCategoria',
            'categoria',
            'id',
            'CASCADE',
            'CASCADE'
        );

        $this->batchInsert('produtos', ['id', 'nome', 'quantidade', 'idCategoria', 'criacao'], [
            [1, 'Bola', 12, 1, date('Y-m-d H:i:s')],
            [2, 'Samsung A55 5G', 99, 2, date('Y-m-d H:i:s')],
            [3, 'Bolas de basquete', 3, 1, date('Y-m-d H:i:s')],
            [4, 'Maquina de Lavar', 50, 2, date('Y-m-d H:i:s')],
            [5, 'Nintendo Switch', 22, 3, date('Y-m-d H:i:s')],
            [6, 'IPhone 13 pro max', 4, 2, date('Y-m-d H:i:s')],
            [7, 'Regata Academia', 63, 1, date('Y-m-d H:i:s')],
            [8, 'Bola de golf', 5, 1, date('Y-m-d H:i:s')],
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropForeignKey('fk-produto-idCategoria', 'produtos');

        $this->dropTable('produtos');
        $this->dropTable('categoria');
    }
}
