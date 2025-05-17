<?php

namespace app\controllers;

use app\models\Categoria;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\ContentNegotiator;
use yii\filters\Cors;

class CategoriaController extends Controller
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        // Configuração do ContentNegotiator para retornar respostas em formato JSON
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::class,
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];


        // Adicionar o filtro CORS para permitir solicitações de http://localhost:4200
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
        return Categoria::find()->all();
    }
}
