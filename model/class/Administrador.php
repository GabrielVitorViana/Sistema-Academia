<?php

class Administrador
{
    private $pdo;
    public $msgErro = "";

    public function conectar($nome, $host, $usuario, $senha)
    {
        global $pdo;
        try {
            $pdo = new PDO("mysql:dbname=" . $nome . ";host=" . $host, $usuario, $senha);
        } catch (PDOException $e) {
            $msgErro = $e->getMessage();
        }
    }

    public function ver() //READ
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT * FROM usuarios");
        $sql->execute();
        $fetchUsuarios = $sql->fetchAll();
        foreach ($fetchUsuarios as $key => $value) {
            $id = $value['id'];
            echo "
            <tr>
            <td><a href='..\controller\deletarUsuario.php?deletar=$id'><button>Excluir</button></a></td>
            <td> $value[id] </td>
            <td> $value[username] </td>
            <td> $value[nome] </td>
            <td> $value[rg] </td>
            <td> $value[cpf] </td>
            <td> $value[filiacao] </td>
            <td> $value[data] </td>
            <td> $value[nacionalidade] </td>
            <td> $value[sexo] </td>
            <td> $value[profissao] </td>
            <td> $value[email] </td>
            <td> $value[ddd] </td>
            <td> $value[telefone] </td>
            <td> $value[cep] </td>
            <td> $value[estado] </td>
            <td> $value[cidade] </td>
            <td> $value[pais] </td>
            <td> $value[endereco] </td>    
            <tr>";
        }
    }


    public function atualizar($id, $cpf, $rg,  $nome, $filiacao, $data, $nacionalidade, $sexo, $profissao, $email, $ddd, $telefone, $cep, $estado, $cidade, $pais, $endereco, $username, $senha) //UPDATE
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT * FROM usuarios WHERE id = :id");
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $pdo->prepare("UPDATE FROM usuarios SET (cpf, rg, nome, filiacao, data, nacionalidade, sexo, profissao, email, ddd, telefone, cep, estado, cidade, pais, endereco, username, senha)  VALUES (:cpf, :rg, :n, :f, :d, :na, :sx, :p, :e, :ddd, :t, :cep, :es, :c, :p, :end, :u, :s WHERE :id = id)");
            $sql->bindValue("id:", $id);
            $sql->bindValue(":cpf", $cpf);
            $sql->bindValue(":rg", $rg);
            $sql->bindValue(":n", $nome);
            $sql->bindValue(":f", $filiacao);
            $sql->bindValue(":d", $data);
            $sql->bindValue(":na", $nacionalidade);
            $sql->bindValue(":sx", $sexo);
            $sql->bindValue(":p", $profissao);
            $sql->bindValue(":e", $email);
            $sql->bindValue(":ddd", $ddd);
            $sql->bindValue(":t", $telefone);
            $sql->bindValue(":cep", $cep);
            $sql->bindValue(":es", $estado);
            $sql->bindValue(":c", $cidade);
            $sql->bindValue(":p", $pais);
            $sql->bindValue(":end", $endereco);
            $sql->bindValue(":u", $username);
            $sql->bindValue(":s", md5($senha));
            $sql->execute();
            return true;
        } else {
            return false;
        }
    }

    public function deletar($id) //DELETE
    {
        global $pdo;
        $sql = $pdo->prepare("DELETE FROM usuarios WHERE id = :id");
        $sql->bindValue(":id", $id);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function logar($admname, $senha) //Função de logar
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT id FROM adm WHERE admname = :a AND senha = :s");
        $sql->bindValue(":a", $admname);
        $sql->bindValue(":s", $senha);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $dado = $sql->fetch();
            session_start();
            $_SESSION['id'] = $dado['id'];
            return true;
        } else {
            return false;
        }
    }


    public function fecharCaixa($data, $nome, $dinheiro, $cartao, $despesas)
    {
        global $pdo;
        $sql = $pdo->prepare("INSERT INTO `fechamento` (`data`, `nome`, `dinheiro`, `cartao`, `despezas`) VALUES (:dt, :n, :d, :c, :de)");
        $sql->bindValue("dt", $data);
        $sql->bindValue(":n", $nome);
        $sql->bindValue(":d", $dinheiro);
        $sql->bindValue(":c", $cartao);
        $sql->bindValue(":de", $despesas);
        $sql->execute();
    }
}
