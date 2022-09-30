let botaoHamburgao = document.getElementById("hamburgao");
let botaoXis = document.getElementById("x-menu");
let imgXis = document.getElementById("x");
let botaoInicio = document.getElementById("inicio");
let botaoServicos = document.getElementById('ferramentas');
let botaoTelefone = document.getElementById('telefone');
let botaoEndereco = document.getElementById('endereco');

let setaCima = document.getElementById('seta-cima');

function positionScroll() {
   if (window.scrollY > 200) {
      setaCima.style.right = "10px";
   } else {
      setaCima.style.right = "-50px";
   }
}

window.addEventListener("scroll", positionScroll)




function validateform(e) {
   // e.preventDefault()
   let nameUser = document.myform.name.value;
   // let password=document.myform.password.value;

   let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
   let name = document.getElementById('form-nome').value;
   if (!regName.test(name) || nameUser == null || nameUser == "") {
      alert('Invalid name given.');
      return false;
   }
}





botaoHamburgao.addEventListener('click', function () {

   botaoInicio.style.cssText = "top: 20px";
   botaoServicos.style.cssText = "left: -160px";
   botaoTelefone.style.cssText = "left: 160px";
   botaoEndereco.style.cssText = "top: 160px";

   botaoHamburgao.style.cssText = "width: 0; height: 0; top: 100px";
   botaoXis.style.cssText = "width: 55px; height: 50px; top: 90px";
   imgXis.style.cssText = "width: 55px; height: 35px";
});

botaoXis.addEventListener('click', function () {

   botaoInicio.style.cssText = "top: 90px";
   botaoServicos.style.cssText = "left: 0";
   botaoTelefone.style.cssText = "left: 0";
   botaoEndereco.style.cssText = "top: 90px";

   botaoHamburgao.style.cssText = "width: 55px; height: 50px; top: 90px";
   botaoXis.style.cssText = "width: 0; height: 0; top: 100px";
   imgXis.style.cssText = "width: 0; height: 0";
});

function fechaMenu() {

   botaoInicio.style.cssText = "top: 90px";
   botaoServicos.style.cssText = "left: 0";
   botaoTelefone.style.cssText = "left: 0";
   botaoEndereco.style.cssText = "top: 90px";

   botaoHamburgao.style.cssText = "width: 55px; height: 50px; top: 90px";
   botaoXis.style.cssText = "width: 0; height: 0; top: 100px";
   imgXis.style.cssText = "width: 0; height: 0";

};

/*funções pra abrir as imagens da seção serviços*/

function abreGrade() {

   let grade = document.getElementById("grade");
   let pGrade = document.getElementById("p-grade");

   if (grade.style.width === "") {
      grade.style.cssText = "width: 80%; height:80%";
      pGrade.innerHTML = "Grades &#9652"
   } else {
      grade.style.cssText = "width: ;";
      pGrade.innerHTML = "Grades &#9662"
   }


};

function abrePortao() {

   let portao = document.getElementById("portao");
   let pPortao = document.getElementById("p-portao");

   if (portao.style.width === "") {
      portao.style.cssText = "width: 80%; height:80%";
      pPortao.innerHTML = "Portões &#9652"

   } else {
      portao.style.cssText = "width: ;";
      pPortao.innerHTML = "Portões &#9662"
   }
};

function abreEstrutura() {

   let estrutura = document.getElementById("estrutura");
   let pEstrutura = document.getElementById("p-estrutura");

   if (estrutura.style.width === "") {
      estrutura.style.cssText = "width: 80%; height:80%";
      pEstrutura.innerHTML = "Estruturas Metálicas &#9652"

   } else {
      estrutura.style.cssText = "width: ;";
      pEstrutura.innerHTML = "Estruturas Metálicas &#9662"
   }
};

function abreMotores() {

   let motores = document.getElementById("motores");
   let pMotores = document.getElementById("p-motores");

   if (motores.style.width === "") {
      motores.style.cssText = "width: 80%; height:80%";
      pMotores.innerHTML = "Instalação de Motores &#9652"

   } else {
      motores.style.cssText = "width: ;";
      pMotores.innerHTML = "Instalação de Motores &#9662"
   }
};

function submite() {
   let inputNumber = document.getElementById("form-numero")
   console.log(inputNumber.value)
}