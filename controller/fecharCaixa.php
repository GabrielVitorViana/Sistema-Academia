<?php
 require_once "../model/class/Administrador.php";

 $adm = new Administrador;

 if(isset($_POST['data'])){
     $data = addslashes($_POST['data']);
     $nome = addslashes($_POST['nome']);
     $dinheiro = addslashes($_POST['dinheiro']);
     $cartao = addslashes($_POST['cartao']);
     $despesas = addslashes($_POST['despesas']);
     if(!empty($data) && !empty($nome) && !empty($dinheiro) && !empty($cartao) && !empty($despesas)){
         $adm->conectar("academia", "localhost", "root", "");
         if($adm->msgErro == ""){
             $adm->fecharCaixa($data, $nome, $dinheiro, $cartao, $despesas);
             echo "<script>Fechamento de caixa registrado</script>";
         } else {
            echo "ERRO " . $adm->msgErro;
         }
     }
}
