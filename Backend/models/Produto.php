<?php

namespace app\models;

use yii\db\ActiveRecord;

class Produto extends ActiveRecord
{
    public static function tableName()
    {
        return 'produtos';
    }

    public function rules()
    {
        return [
            [['nome', 'quantidade', 'idCategoria'], 'required'],
            [['quantidade', 'idCategoria'], 'integer'],
            [['criacao'], 'safe'],
            [['nome'], 'string', 'max' => 255],
        ];
    }

    public function attributeLabels()
    {
        return [
            'id' => 'Id',
            'criacao' => 'Criação',
            'quantidade' => 'Quantidade',
            'idCategoria' => 'Categoria',
            'nome' => 'Nome',
        ];
    }

    public function fields()
    {
        $fields = parent::fields();

        $fields['criacao_formatada'] = function () {
            return date('d/m/Y H:i:s', strtotime($this->criacao));
        };

        return $fields;
    }
}
