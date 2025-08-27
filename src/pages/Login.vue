<script>
import FormLogin from '../components/FormLogin.vue'

export default {
    name: 'Login',
    components: {
        InputText,
        Button,
        Message
    }
}

</script>

<template>

    <div class="conteiner">

        <div class="metade1">
          <FormLogin/>
        </div>
            <div class="metade2">
            <img class="img" src="../../public/imagem1.png" alt="" srcset="">
        </div>
    </div>
</template>

<style>
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
.metade1{
    width: 45%;
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: baseline;
    padding-left: 4%;
}
.metade2{
    width:55%;
    display: flex;
    align-items: center;
    justify-content: baseline;
}
.img{
    width: 100%;
    max-width: 700px;
}
</style>