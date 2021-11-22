<?php
// include autoloader
require_once '..\libraries\dompdf\autoload.inc.php';
require_once '..\model\class\Usuario.php';

$u = new Usuario;
if (isset($_POST['username'])) {
    $username = addslashes($_POST["username"]);
    $senha = addslashes($_POST["senha"]);
    if (!empty($username) && !empty($senha)) {
        $u->conectar("academia", "localhost", "root", ""); //Loga no banco de dados
        if ($u->msgErro == "") {
            if ($u->gerarComprovante($username, $senha)) {
                echo "ACESSO PERMITIDO";
            } else {
                echo "<script>window.alert('ACESSO NEGADO')</script>"; //Erro
                header('Location: Location: ..\view\comprovante.html');
            }
        } else {
            echo "ERRO " . $u->msgErro;
        }
    } else {
        echo "<script>window.alert('PREENCHER TODOS OS CAMPOS')</script>"; //Erro
        header('Location: Location: ..\view\comprovante.html');
    }
}
