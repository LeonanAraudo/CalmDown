<script setup>
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import { useRouter } from 'vue-router'

const router = useRouter()

const irParaLogin = () => {
    router.push('/Login')
}

</script>
<template>
    <div class="conteiner">
        <div class="metade1">
            <div>
                <p class="titulo1">Bem-vindo a um espaço calmo para 
                    você se conectar de forma leve</p>
            </div>
            <div class="boxBotao">
                <Button @click="irParaLogin" label="Começar com tranquilidade" icon="pi pi-arrow-right" style="color: #333333" class="botao" icon-pos="right" />
            </div>
        </div>
        <div class="metade2">
            <div class="img"></div>
        </div>
    </div>
    <div class="circulo circulo-1"></div>
    <div class="circulo circulo-2"></div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background:linear-gradient(to bottom,#E5F0FD,#F5F6FA);
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.conteiner{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
}
.metade1{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
}
.metade2{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: baseline;
}
.titulo1{
    color: #000000;
    font-size: 2.1vw;
    font-weight: bold;
}
.boxBotao{
    width: 100%;
}
.botao{
    background-color: #A8D5BA !important;
    border: none !important;
    font-weight: bold !important;
    font-size: 1rem !important;
    width: 55% !important;
    height: 40px !important;
    outline: none !important;
}
.botao:hover{
    transform: scale(1.05) !important;
    transition: all 0.5s !important;
}
.img{
    background-image: url('../../public/imagem2.png');
    width: 100%;
    height: 60%;
    max-width: 900px;
    background-size: cover;   
    background-position: center; 
    background-repeat: no-repeat;
}
.circulo{
    position: absolute;
    border-radius: 50%;
    pointer-events: none; 
    z-index: -1;
}
.circulo-1 {
    width: 50%;
    height: 100%;
    background:#4E51FD;
    bottom: -270px;
    right: -150px;
}
.circulo-2 {
    width: 40%;
    height: 80%;
    background:#6f71fd;
    bottom: 80px;
    right: -250px;
}
@media(max-width: 768px){
.conteiner{
 flex-direction: column;
}
.img{
    background-image: url('../../public/imagem4.png');
}
.titulo1{
    font-size: 20px;
}
.metade1{
    width: 100%;
    order: 2;
}
.metade2{
    width: 100%;
}
.circulo{
    display: none;
}
}
</style>