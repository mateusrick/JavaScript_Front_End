/*var nomeCompletoCliente;
var emailCliente;
var telefoneCliente;
var senhaClie
var Login_Cliente = {Nome: "Cliente1", Senha: "Cliente1", email:"cliente1@gmail.com"};
var Login_Administrador = {Nome: "Admin1", Senha: "Admin1", email:"admin1@gmail.com"};



document.getElementById("submit_administrador").onclick = function(){
    
    Nome_Completo = document.getElementById("nome").style.background ="greed"
    email = document.getElementById("email").style.background ="greed"
    Telefone = document.getElementById("telefone").style.background ="greed"
    Senha = document.getElementById("nosenhame").style.background ="greed"


}



var cadastroCliente1 = {Nome_Completo:"Cliente1",email:"cliente1@gmail.com",Telefone:"(31)9-9123-4567",Sexo:"",Dt_Nascimento:"",Senha:"",confirmarSenha:""};
var cadastroCliente2 = {Nome_Completo:"Cliente1",email:"cliente1@gmail.com",Telefone:"(31)9-9123-4567",Sexo:"",Dt_Nascimento:"",Senha:"",confirmarSenha:""};
var cadastroAdministrador1 = {Nome_Completo:"Administrador1",email:"administrador1@gmail.com",Telefone:"(31)9-9123-4567",Sexo:"",Dt_Nascimento:"",Senha:"",confirmarSenha:""};
var cadastroAdministrador2 = {Nome_Completo:"Administrador2",email:"administrador2@gmail.com",Telefone:"(31)9-9123-4567",Sexo:"",Dt_Nascimento:"",Senha:"",confirmarSenha:""};
*/

function mascara_telefone(){
    var tel = document.getElementById("telefone").value;
    console.log(tel);
    tel =tel.slice(0,14);
    console.log(tel);
    document.getElementById("telefone").value =tel;
    tel=document.getElementById("telefone").value.slice(0,10);
    console.log(tel);

    var tel_formato = document.getElementById("telefone").value;
    if(tel_formato[0]!="(")
    {
        if(tel_formato[0]!=undefined)
        {
            document.getElementById("telefone").value = "("+tel_formato[0];
        }
    }
    if(tel_formato[3]!=")")
    {
        if(tel_formato[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formato.slice(0,3)+")"+tel_formato[3]
        }
    }
    if(tel_formato[9]!="-")
    {
        if(tel_formato[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_formato.slice(0,9)+"-"+tel_formato[9]
        }
    }
}

function mascara_cep(){
     var cep_formato = document.getElementById("cpf_cliente").value;
     if(cep_formato[2]!="."){
         if(cep_formato[2]!=undefined){
             document.getElementById("cpf_cliente").value=cep_formato.slice(0,2)+"."+cep_formato[2]
         }
     }
     
     if(cep_formato[6]!="-"){
         if(cep_formato[6]!=undefined){
             document.getElementById("cpf_cliente").value=cep_formato.slice(0,6)+"-"+cep_formato[6];
         }
     }
}


function mascara_telefone_admin(){
    var tel = document.getElementById("telefone_administrador").value;
    console.log(tel);
    tel =tel.slice(0,14);
    console.log(tel);
    document.getElementById("telefone_administrador").value =tel;
    tel= document.getElementById("telefone_administrador").value.slice(0,10);
    console.log(tel);

    var tel_formato = document.getElementById("telefone_administrador").value;

    if(tel_formato[0] !="("){
        if(tel_formato[0]!= undefined){
            document.getElementById("telefone_administrador").value = "("+tel_formato[0]
        }
    }

    if(tel[3]!=")"){
        if(tel_formato[3]!=undefined){
            document.getElementById("telefone_administrador").value = tel_formato.slice(0,3)+")"+tel_formato[3]
        }
    }

    if(tel[9]!="-"){
        if(tel_formato[9]!=undefined){
            document.getElementById("telefone_administrador").value = tel_formato.slice(0,9)+"-"+tel_formato[9]
        }
    }
}
      

function mascara_cep_admin(){
    var cep_formato = document.getElementById("cpf_administrador").value;
    if(cep_formato[2]!="."){
        if(cep_formato[2]!= undefined){
            document.getElementById("cpf_administrador").value = cep_formato.slice(0,2)+"."+cep_formato[2]
        }
    }
    if(cep_formato[6]!="-"){
        if(cep_formato[6]!=undefined){
            document.getElementById("cpf_administrador").value = cep_formato.slice(0,6)+"-"+cep_formato[6]
        }
    }
}







function mascara_dinheiro_cifrao ()
{
    var dinheiro_formatado = document.getElementById("PrecoProduto").value
    if (dinheiro_formatado[0]!="R")
    {
        if(dinheiro_formatado[0]!=undefined)
        {
            document.getElementById("PrecoProduto").value="R$"+dinheiro_formatado[0];
        }
    }
    if (dinheiro_formatado[1]!="$")
    {
        if(dinheiro_formatado[1]!=undefined)
        {
            document.getElementById("PrecoProduto").value=dinheiro_formatado[0]+"$"+dinheiro_formatado[1];
        }
    }
}
function mascara_dinheiro_virgula ()
{
    var dinheiro_formatado = document.getElementById("PrecoProduto").value;

    if (dinheiro_formatado[dinheiro_formatado.length-3]!=",") 
    {
        if (dinheiro_formatado[dinheiro_formatado.length-2]==",") 
        {
            document.getElementById("PrecoProduto").value = dinheiro_formatado+"0";
        }
        else
        {
            if (dinheiro_formatado[dinheiro_formatado.length-1]==",") 
            {
                document.getElementById("PrecoProduto").value = dinheiro_formatado+"00";
            }
            else
            {
                document.getElementById("PrecoProduto").value = dinheiro_formatado+",00";
            }
        }

    }
}

 
function moeda(z){
v = z.value;

v=v.replace(/\D/g,"") 
v=v.replace(/(\d{1})(\d{14})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{11})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{8})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{5})$/,"$1.$2") 
v=v.replace(/(\d{1})(\d{1,2})$/,"$1,$2") 
z.value = v;
}