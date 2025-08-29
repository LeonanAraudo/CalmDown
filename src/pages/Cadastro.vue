<script setup>
import FormCadastro from '../components/FormCadastro.vue';
import 'primeicons/primeicons.css'

</script>

<template>
    <div class="voltar">
        <router-link style="color: #000; font-size:1.5rem ;" to="/Login" class="pi pi-angle-double-left"></router-link>
    </div>
    <div class="conteiner">
        <FormCadastro />
    </div>
</template>

<style >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #E5F0FD;
    overflow: hidden;
}
.conteiner{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
}
.voltar{
    position: absolute;
    display: flex;
    justify-content: baseline;
    margin: 20px;
}
</style>