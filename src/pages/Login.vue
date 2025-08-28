<script setup>
import FormLogin from '../components/FormLogin.vue'
</script>

<template>
    <div class="conteiner">
        <div class="box1">
          <FormLogin/>
        </div>
        <div class="box2">
            <img class="img3" src="../../public/imagem3.png" alt="" srcset="">
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
body {
    background-color: #E5F0FD;
    overflow: hidden;
}
.conteiner{
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: stretch;
    flex-direction: row;
}
.box1{
    width: 40%;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
}
.box2{
    width:55%;
    display: flex;
    align-items: center;
    justify-content: baseline;
}
.img{
    width: 100%;
    max-width: 900px;
}
@media(max-width: 768px){
.img3{
    display: none;
}
.box1{
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box2{
    width: 0;
    height: 0;
}

}
</style>