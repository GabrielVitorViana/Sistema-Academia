<?php require_once '..\model\class\Usuario.php';
$u = new Usuario;
if(isset($_POST['cpf'])){
	//Dados pessoais
    $cpf = addslashes($_POST["cpf"]);
	$rg = addslashes($_POST["rg"]);
    $nome = addslashes($_POST["nome"]);
    $filiacao = addslashes($_POST["filiacao"]);
    $data = addslashes($_POST["data"]);
    $nacionalidade = addslashes($_POST["nacionalidade"]);
    $sexo = addslashes($_POST["sexo"]);
    $profissao = addslashes($_POST["profissao"]);
    $email = addslashes($_POST["email"]);
    //Dados residenciais 
    $ddd = addslashes($_POST["ddd"]);
	$telefone = addslashes($_POST["telefone"]);
	$cep = addslashes($_POST["cep"]);
	$estado = addslashes($_POST["estado"]);
	$cidade = addslashes($_POST["cidade"]);
	$pais = addslashes($_POST["pais"]);
	//Conta
	$endereco = addslashes($_POST["endereco"]);
	$username = addslashes($_POST["username"]);
	$senha = addslashes($_POST["senha"]);
	$confirmarSenha = addslashes($_POST["confirme"]);
    if (!empty($cpf) && !empty($rg) && !empty($nome) && !empty($filiacao) && !empty($data) && !empty($nacionalidade) && !empty($sexo) && !empty($profissao) && !empty($email) && !empty($ddd) && !empty($telefone) && !empty($cep) && !empty($estado) && !empty($cidade) && !empty($pais) && !empty($endereco) && !empty($username) && !empty($senha)) {
        $u->conectar("academia", "localhost", "root", "");
        if ($u->msgErro == "") {   //Conexão bem sucessedida
            if ($senha == $confirmarSenha) {//Compara a senha com confirmar senha
                if ($u->cadastrar($cpf, $rg, $nome, $filiacao, $data, $nacionalidade, $sexo, $profissao, $email, $ddd, $telefone, $cep, $estado, $cidade, $pais, $endereco, $username, $senha)) {
                    echo "<script>window.alert('Cadastro realizado com sucesso!!!')</script>";
                    include_once '..\view\catraca.html';
                } else {
                    echo "<script>window.alert('Usuario já cadastrado.')</script>";
                    include_once '..\view\matricula.html';
                }
            } else {
                echo "<script>window.alert('Senha e Confirmar senha não conferem.')</script>";
                include_once '..\view\matricula.html';
            }
        } else {
            echo "ERRO " . $u->msgErro;
        }
    } else {
        echo "<script>window.alert('Preencha todos os campos')</script>";
        include_once '..\view\matricula.html';
    }
}