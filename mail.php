<?php
$recepient = "agragregra@ya.ru";
$sitename = "Название сайта";


$phone = trim($_POST["UserPhone"]);;
$message = "Телефон: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");