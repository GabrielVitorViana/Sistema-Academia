<?php require_once '../model/class/Administrador.php';
$adm = new Administrador;
if(isset($_POST['admname'])){
    $admname = addslashes($_POST["admname"]);
    $senha = addslashes($_POST["senha"]);
    if(!empty($admname) && !empty($senha)){
        $adm->conectar("academia", "localhost", "root", "");//Loga no banco de dados
        if($adm->msgErro == ""){
            if($adm->logar($admname, $senha)){
               header('Location: ..\view\homeAdmin.html');
            } else {
                echo "<script>window.alert('ACESSO NEGADO')</script>"; //Erro
                include_once '../view/loginAdmin.html';
            }
        } else {
            echo "ERRO " . $adm->msgErro;
        }
    } else {
        echo "<script>window.alert('PREENCHER TODOS OS CAMPOS')</script>";
        include_once '../view/loginAdmin.html';
    }
}