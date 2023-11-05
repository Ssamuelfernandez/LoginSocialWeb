<template>

<div id="animationContainerForgot" class="container-forgot h-100">

<div class="row h-100">

    <div class="col-sm-5 p-3 d-flex flex-column align-items-center justify-content-center h-100">

        <div class="text-center mx-auto">
            <h2 class="text-center">Ups...</h2>
        </div>

        <div class="text-center mx-auto">
            <p>I don't forgot my password.</p>
        </div>


        <div class="text-center mx-auto">
            <button @click="goToLogin" type="button" id="startAnimationButtonRegister" class="custom-button">Sign in</button>
        </div>

        <div class="mx-auto mt-3 animacion" ref="animationTarget3"></div>


    </div>

    <div class="col-sm-7 p-3 h-100">

        <div class="bg-light p-3 rounded-4 shadow h-100">

            <form action="#">

                <h2 class="text-center mt-1 mb-4">Reset password</h2>

                   <div class="mb-3 d-flex custom-input">
                    <span class="input-group-text"
                        style="background: transparent; border: transparent;"><font-awesome-icon
                            :icon="['fas', 'envelope']" /></span>
                    <input type="email" class="custom-form-control" placeholder="Email*">
                </div>


                <div class="text-center mb-4">
                    <button class="custom-button" type="submit">Reset</button>
                </div> 

        
                

            </form>

        </div>



    </div>

</div>


</div>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import lottie from 'lottie-web';

import animacion3 from '../assets/animation3.json';

const animationTarget3 = ref(null);

const router = useRouter();

const goToLogin = () => {
  
  router.push({ name: 'login' });
};

onMounted(() => {


loadAnimation(animationTarget3, animacion3);

});

function loadAnimation(target, animationData) {
lottie.loadAnimation({
    container: target.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData,
});
}


</script>