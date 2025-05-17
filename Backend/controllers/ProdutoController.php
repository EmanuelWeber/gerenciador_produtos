<?php

namespace app\controllers;

use yii\web\Controller;
use yii\web\Response;
use yii\filters\ContentNegotiator;
use yii\filters\Cors;
use app\models\Produto;

class ProdutoController extends Controller
{

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::class,
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];


        $behaviors['corsFilter'] = [
            'class' => Cors::class,
            'cors' => [
                'Origin' => ['http://localhost:4200'],
                'Access-Control-Request-Method' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 86400,
                'Access-Control-Request-Headers' => ['Origin', 'X-Requested-With', 'Content-Type', 'accept', 'Authorization']
            ],
        ];


        return $behaviors;
    }


    public function actionListar()
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return Produto::find()->all();
    }

    public function actionFiltrarPorNome($nome)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        return Produto::find()
            ->where(['like', 'nome', $nome])
            ->all();
    }

    public function actionInserir()
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;

        $body = \Yii::$app->request->post();
        $produto = new Produto();

        $produto->attributes = $body;
        $produto->criacao = date('Y-m-d H:i:s'); // define data de criação

        if ($produto->save()) {
            return ['sucesso' => true, 'produto' => $produto];
        }

        return ['sucesso' => false, 'erros' => $produto->getErrors()];
    }

    public function actionAtualizar($id)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;

        $produto = Produto::findOne($id);
        if (!$produto) {
            return ['sucesso' => false, 'mensagem' => 'Produto não encontrado'];
        }

        $body = \Yii::$app->request->bodyParams;
        $produto->attributes = $body;

        if ($produto->save()) {
            return ['sucesso' => true, 'produto' => $produto];
        }

        return ['sucesso' => false, 'erros' => $produto->getErrors()];
    }


    public function actionDeletar($id)
    {
        \Yii::$app->response->format = Response::FORMAT_JSON;

        $produto = Produto::findOne($id);
        if (!$produto) {
            return ['sucesso' => false, 'mensagem' => 'Produto não encontrado'];
        }

        if ($produto->delete()) {
            return ['sucesso' => true];
        }

        return ['sucesso' => false, 'mensagem' => 'Erro ao deletar'];
    }

}
