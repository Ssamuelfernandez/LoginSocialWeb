<template>

    <div id="animationContainerRegister"
            class="container-register h-100">

            <div class="row h-100">

                <div class="col-sm-5 p-3 d-flex flex-column align-items-center justify-content-center h-100">

                    <div class="text-center mx-auto">
                        <h2 class="text-center">Welcome Back!</h2>
                    </div>

                    <div class="text-center mx-auto">
                        <p>Enter your details to login.</p>
                    </div>


                    <div class="text-center mx-auto">
                        <button @click="goToLogin" type="button" id="startAnimationButtonRegister" class="custom-button">Sign in</button>
                    </div>

                    <div class="mx-auto animacion" ref="animationTarget2"></div>


                </div>

                <div class="col-sm-7 p-3 h-100">

                    <div class="bg-light p-3 rounded-4 shadow h-100">

                        <form action="#">

                            <h2 class="text-center mt-1 mb-3">Create Account</h2>

                            <div class="social-container mb-2">
                                <span href="#" class="social"><font-awesome-icon :icon="['fab', 'facebook-f']" /></span>
                                <span href="#" class="social"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></span>
                                <span href="#" class="social"><font-awesome-icon :icon="['fab', 'twitter']" /></span>
                            </div>
                            <div class="text-center">
                                <span>or use your email:</span>
                            </div>


                            <div class="mb-2 d-flex custom-input">
                                <span class="input-group-text"
                                    style="background: transparent; border: transparent;"><font-awesome-icon
                                        :icon="['fas', 'user']" /></span>
                                <input type="text" class="custom-form-control" placeholder="Name*">
                            </div>

                            <div class="mb-2 d-flex custom-input">
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

                            <div class="content d-flex mx-auto">
                                <div class="checkbox mb-3 ms-2 mx-auto">
                                    <input type="checkbox" class="form-check-input mx-1" name="checkbox" id="checkbox">
                                    <label for="checkbox">I agree to the <a
                                            class="link-offset-2 link-underline link-underline-opacity-0 link-secondary"
                                            href="#">social web</a> terms</label>
                                </div>

                            </div>

                            <div class="text-center mb-2">
                                <button class="custom-button" type="submit">Sign up</button>
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

import animacion2 from '../assets/animation1.json';

const animationTarget2 = ref(null);

const router = useRouter();

const goToLogin = () => {
  
  router.push({ name: 'login' });
};

onMounted(() => {


loadAnimation(animationTarget2, animacion2);

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