<?php
include '../model/class/Administrador.php';
$adm = new Administrador;
if (isset($_POST['cpf'])) {
    //Dados pessoais
    $cpf = addslashes($_POST["cpf"]);
    $rg = addslashes(($_POST["rg"]));
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
    if (!empty($cpf) && !empty($rg) && !empty($nome) && !empty($filiacao) && !empty($data) && !empty($nacionalidade) && !empty($sexo) && !empty($profissao) && !empty($email) && !empty($ddd) && !empty($telefone) && !empty($cep) && !empty($estado) && !empty($cidade) && !empty($pais) && !empty($endereco) && !empty($username) && !empty($senha)) {
        $adm->conectar("academia", "localhost", "root", "");
        if ($adm->msgErro = "") {
            if ($adm->atualizar($id, $cpf, $rg, $nome, $filiacao, $data, $nacionalidade, $sexo, $profissao, $email, $ddd, $telefone, $cep, $estado, $cidade, $pais, $endereco, $username, $senha)) {
                echo "Cadastro atualizado com sucesso";
            }
        } else {
            echo "Erro ao atualizar cadastro";
        }
    } else {
        echo "ERRO " . $adm->msgErro;
    }
} else {
    echo "Preencher todos os campos";
}
