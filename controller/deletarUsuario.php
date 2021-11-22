<?php require_once '../model/class/Administrador.php';
$adm = new Administrador;
if(isset($_GET['deletar'])){
    $id = (int)$_GET['deletar'];
    $adm->conectar("academia", "localhost", "root", "");
    if($adm->msgErro == ""){
        if($adm->deletar($id)){
            header('Location: ..\view\listarCadastros.php');
            echo "Usuario excluido";
        } else {
           echo "Usuario não excluido";
        }
    } else {
        echo "ERRO " . $adm->msgErro;
    } 
} else {
    echo "Erro ao cliclar no botão"; 
}
