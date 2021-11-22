<?php require '..\model\class\Usuario.php';
$u = new Usuario;
if (isset($_POST['username'])) {
    $username = addslashes($_POST["username"]);
    $senha = addslashes($_POST["senha"]);
    if (!empty($username) && !empty($senha)) {
        $u->conectar("academia", "localhost", "root", ""); //Loga no banco de dados
        if ($u->msgErro == "") {
            if ($u->logar($username, $senha)) {
                echo "<script>window.alert('ACESSO LIBERADO')</script>";
                include_once '..\view\catraca.html';
            } else {
                echo "<script>window.alert('ACESSO NEGADADO')</script>";
                include_once '..\view\catraca.html';
            }
        } else {
            echo "ERRO " . $u->msgErro;
        }
    } else {
        echo "<script>window.alert('PREENCHER TODOS OS CAMPOS')</script>";
        include_once '..\view\catraca.html';
    }
}
