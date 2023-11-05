<template>

        <div id="animationContainerLogin" class="container-login h-100">

            <div class="row h-100">

                <div class="col-sm-7 p-3 rounded-start-4 h-100">

                    <div class="bg-light p-2 rounded-4 shadow h-100">

                        <form action="#">

                            <h1 class="text-center mt-1 mb-4">Sign in</h1>

                            <div class="social-container mb-2">
                                <span type="button" href="#" class="social"><font-awesome-icon
                                        :icon="['fab', 'facebook-f']" /></span>
                                <span type="button" href="#" class="social"><font-awesome-icon
                                        :icon="['fab', 'google-plus-g']" /></span>
                                <span type="button" href="#" class="social"><font-awesome-icon
                                        :icon="['fab', 'twitter']" /></span>
                            </div>
                            <div class="text-center">
                                <span>or use your account:</span>
                            </div>

                            <div class="mb-3 mt-3 d-flex custom-input">
                                <span class="input-group-text"
                                    style="background: transparent; border: transparent;"><font-awesome-icon
                                        :icon="['fas', 'envelope']" /></span>
                                <input type="email" class="custom-form-control" placeholder="Email*">
                            </div>
                            <div class="mb-3 d-flex custom-input">
                                <span class="input-group-text"
                                    style="background: transparent; border: transparent;"><font-awesome-icon
                                        :icon="['fas', 'lock']" /></span>
                                <input type="password" class="custom-form-control" placeholder="Password*">
                            </div>


                            <div class="content mb-3 d-flex mx-auto">
                                <div class="checkbox mb-3 ms-2 mx-auto">
                                    <input type="checkbox" class="form-check-input mx-1" name="checkbox" id="checkbox">
                                    <label for="checkbox">Remember me</label>
                                </div>
                                <div class="pass-link text-center mx-auto">
                                    <a type="button" @click="goToForget ">Forget password?</a>
                                </div>

                            </div>

                            <div class="text-center mb-2">
                                <button class="custom-button" type="submit">Sign in</button>
                            </div>

                        </form>

                    </div>

                </div>

                <div class="col-sm-5 p-3 d-flex flex-column align-items-center justify-content-center h-100">

                    <div class="text-center mx-auto">
                        <h3>Let's be friends!!</h3>
                    </div>

                    <div class="text-center mx-auto">
                        <p>Be part of our great community, have fun time with us!!</p>
                    </div>

                    <div class="text-center mx-auto">
                        <button type="button" @click="goToRegister" class="custom-button">Sign up</button>
                    </div>

                    <div class="mx-auto animacion" id="animationId1" ref="animationTarget"></div>

                </div>
            </div>
        </div>

</template>

<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import lottie from 'lottie-web';

import animacion1 from '../assets/animation2.json';

const animationTarget = ref(null);


const router = useRouter();

const goToRegister = () => {
  
  router.push({ name: 'register' });
};

const goToForget = () => {
  
  router.push({ name: 'forget' });
};



onMounted(() => {

    loadAnimation(animationTarget, animacion1);

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

<style scoped>

</style>