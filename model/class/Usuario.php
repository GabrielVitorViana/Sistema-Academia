<?php

use Dompdf\Dompdf;

class Usuario

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

    public function cadastrar($cpf, $rg,  $nome, $filiacao, $data, $nacionalidade, $sexo, $profissao, $email, $ddd, $telefone, $cep, $estado, $cidade, $pais, $endereco, $username, $senha)
    {
        global $pdo;
        $sql =  $pdo->prepare("SELECT id FROM usuarios WHERE  username = :u");
        $sql->bindValue(":u", $username);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            return false;
        } else {
            $sql = $pdo->prepare("INSERT INTO usuarios (cpf, rg, nome, filiacao, data, nacionalidade, sexo, profissao, email, ddd, telefone, cep, estado, cidade, pais, endereco, username, senha)  VALUES (:cpf, :rg, :n, :f, :d, :na, :sx, :p, :e, :ddd, :t, :cep, :es, :c, :p, :end, :u, :s)");
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
        }
    }

    public function logar($username, $senha)
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT id FROM usuarios WHERE username = :u AND senha = :s");
        $sql->bindValue(":u", $username);
        $sql->bindValue(":s", md5($senha));
        $sql->execute();
        if ($sql->rowCount() > 0) {
            return true;
        } else {
            return false;
        }
    }

    public function gerarComprovante($username, $senha)
    {
        global $pdo;
        $sql = $pdo->prepare("SELECT * FROM usuarios WHERE username = :u AND senha = :s");
        $sql->bindValue(":u", $username);
        $sql->bindValue(":s", md5($senha));
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $fetchUsuarios = $sql->fetchAll();
            foreach ($fetchUsuarios as $key => $value) {
                ob_start(); //Tira o output 

                echo "<center><h1>POWER SHIPE ACADEMIA</h1><br>
                <h3>COMPROVANTE DE PAGAMENTO</h3>
                <p>O cliente $value[nome], matricula $value[id] com CPF $value[cpf] e RG $value[rg]
                nascido em $value[data] do sexo $value[sexo] com a nacionalidade $value[nacionalidade] com a
                profissão de $value[profissao] e filiação $value[filiacao]<br>
                E-MAIL: $value[email]<br>
                TELEFONE: $value[ddd]  $value[telefone]<br>
                ENDEREÇO: $value[endereco]    CEP: $value[cep]<br> 
                PAÍS: $value[pais]            ESTADO: $value[cidade] - $value[estado]
                <br><br>
                Realizou o pagamento da mensalidade no valor de <b>R$99,99</b><br>
                Assinatura do cliente ____________________________<p></center>";

                $dompdf = new Dompdf();

                //Mostra o html
                $dompdf->loadhtml(ob_get_clean());

                //Renderiza o html
                $dompdf->render();

                //Formato do pdf
                $dompdf->setPaper('A4', 'portrait');

                //nome do arquivo que ira ser salvo, false para não baixar o arquivo automaticamente
                $dompdf->stream("comprovante.pdf", array('Attachment' => false));
            }
            return true;
        } else {
            return false;
        }
    }
}
