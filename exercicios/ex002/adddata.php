<?php
    if (!file_exists("meusdados.csv")) {
    $file = fopen("meusdados.csv", "w");
    fwrite($file, "dataentrada,pesojejum,pesopos,pontuacaosono,temposono,sonorem,sonoprofundo,acordado,horamusc,horabike,caloriasmusc,freqmedia,freqmax,tempotreino,dia\n");
    } else {
    $file = fopen("meusdados.csv", "a");
    }
    foreach($data as $line){
    fwrite($file, $line . "\n");
    }
    fclose($file);

?>
