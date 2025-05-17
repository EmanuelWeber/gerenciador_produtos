<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;',
    'username' => 'root',
    'password' => 'Q#2fTre34zXa',
    'charset' => 'utf8',
    'on afterOpen' => function ($event) {
        $db = $event->sender;
        $dbName = 'gerenciador_produtos';

        $command = $db->createCommand("CREATE DATABASE IF NOT EXISTS `$dbName`");
        $command->execute();

        $db->createCommand("USE `$dbName`")->execute();
    },
];
