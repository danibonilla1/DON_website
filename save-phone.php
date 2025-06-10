<?php
//  -------- leer datos --------
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$phone  = isset($data['phone'])        ? $data['phone']        : '';
$method = isset($data['paymentMethod'])? $data['paymentMethod']: '';

//  -------- sanitizar --------
$phone  = preg_replace('/[\r\n,]/', '', $phone);
$method = preg_replace('/[\r\n,]/', '', $method);

//  -------- capturar IP --------
$ip = $_SERVER['REMOTE_ADDR'];

//  -------- registrar --------
$line = date('c') . ",$ip,$method,$phone" . PHP_EOL;
file_put_contents('phones.txt', $line, FILE_APPEND | LOCK_EX);

//  -------- respuesta --------
header('Content-Type: application/json');
echo json_encode(['ok' => true]);
?>