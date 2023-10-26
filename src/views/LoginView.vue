<template>
    <div class="container position-absolute top-50 start-50 translate-middle rounded-4 shadow"
        style="background-color: rgb(222, 228, 236);">

        <!--     Parte del login     -->

        <div v-if="view === 'login'" id="animationContainerLogin" class="container-login h-100">

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
                                    <a type="button" @click="changeRoute('forgot'); activateAnimation('login') ">Forget password?</a>
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
                        <button type="button" @click="activateAnimation('login'); changeRoute('register') " class="custom-button">Sign up</button>
                    </div>


                    <div class="mx-auto" ref="animationTarget"></div>







                </div>

            </div>

        </div>

        <!--     Parte del register     -->

        <div v-else-if="view === 'register'" id="animationContainerRegister"
            class="container-register h-100">

            <div class="row h-100">

                <div class="col-sm-5 p-3 d-flex flex-column align-items-center justify-content-center h-100">

                    <div class="text-center mx-auto">
                        <h2 class="text-center">Welcome Back!</h2>
                    </div>

                    <div class="text-center mx-auto">
                        <p>Hey, Enter your details to login to your account</p>
                    </div>


                    <div class="text-center mx-auto">
                        <button type="button" id="startAnimationButtonRegister" class="custom-button"
                            @click="activateAnimation('register'); changeRoute('login')">Sign in</button>
                    </div>

                    <div class="mx-auto" ref="animationTarget2"></div>


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

        <!--     Parte del forgot password     -->

        <div v-else-if="view === 'forgot'" id="animationContainerForgot" class="container-forgot h-100">

            <div class="row h-100">

                <div class="col-sm-5 p-3 d-flex flex-column align-items-center justify-content-center h-100">

                    <div class="text-center mx-auto">
                        <h2 class="text-center">Welcome Back!</h2>
                    </div>

                    <div class="text-center mx-auto">
                        <p>Hey, Enter your details to login to your account</p>
                    </div>


                    <div class="text-center mx-auto">
                        <button type="button" id="startAnimationButtonRegister" class="custom-button"
                            @click="activateAnimation('forgot'); changeRoute('login')">Sign in</button>
                    </div>

                    <div class="mx-auto" ref="animationTarget2"></div>


                </div>

                <div class="col-sm-7 p-3 h-100">

                    <div class="bg-light p-3 rounded-4 shadow h-100">

                        <form action="#">

                            <h2 class="text-center mt-1 mb-4">Reset password</h2>

                            <div class="text-center mb-4">
                        <p>We can help you with your password!!</p>
                    </div>

                            <div class="mb-3 d-flex custom-input">
                                <span class="input-group-text"
                                    style="background: transparent; border: transparent;"><font-awesome-icon
                                        :icon="['fas', 'envelope']" /></span>
                                <input type="email" class="custom-form-control" placeholder="Email*">
                            </div>


                            <div class="text-center mb-2">
                                <button class="custom-button" type="submit">Reset</button>
                            </div>

                        </form>

                    </div>



                </div>

            </div>


        </div>


    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import lottie from 'lottie-web';

import animacion1 from '../assets/animation2.json';
import animacion2 from '../assets/animation1.json';
import animacion3 from '../assets/animation3.json';

const animationTarget = ref(null);
const animationTarget2 = ref(null);


const view = ref('login');
const router = useRouter();


const changeRoute = (newView) => {

    setTimeout(() => {

        view.value = newView; 
        router.push({ name: newView }); // Cambiar la ruta al hacer clic
        
    }, 1750);

    

};

const activateAnimation = (animationView) => {
    
    if (animationView === 'login') {
        const loginAnimation = document.getElementById('animationContainerLogin');
        loginAnimation.classList.add('flip-vertical-right');
        
    };
    
    if (animationView === 'register') {
        const registerAnimation = document.getElementById('animationContainerRegister');
        registerAnimation.classList.add('flip-vertical-left');
        
    };

    if (animationView === 'forgot') {
        const registerAnimation = document.getElementById('animationContainerForgot');
        registerAnimation.classList.add('flip-vertical-left');
};

};



onMounted(() => {

    // Establecer la vista predeterminada en base a la ruta actual
    const currentRoute = router.currentRoute.value;
    if (currentRoute.name) {
        view.value = currentRoute.name;
    }

    // Cargar y reproducir las animaciones
    loadAnimation(animationTarget, animacion1);
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

// Vuelve a cargar y reproducir la animación cuando 'view' cambia
watch(view, () => {


    loadAnimation(animationTarget, animacion1);
    loadAnimation(animationTarget2, animacion2);
});



</script>

<style scoped>
.container {
    width: 650px;
    height: 450px;
}

.social-container {
    display: flex;
    align-items: center;
    /* Centra verticalmente los elementos */
    justify-content: center;
    /* Centra horizontalmente los elementos */
}

.social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 2px solid rgb(74, 104, 161);
    /* Cambiamos background-color a border y establecemos un ancho y color para el borde */
    border-radius: 50%;
    /* Esto crea el círculo */
    margin: 0 18px;
    color: rgb(74, 104, 161);
    /* Color del icono */
    font-size: 25px;
    /* Tamaño del icono */
}

.social:hover {
    border: 2px solid #525252;
    /* Cambiamos background-color a border y establecemos un ancho y color para el borde */
    color: #525252;
    /* Color del icono */
}

.custom-input {
    display: flex;
    align-items: center;
}

.input-group-text {
    color: rgb(74, 104, 161);
}

.custom-form-control {
    background: transparent;
    border: none;
    outline: none;
    padding: 0.5rem;
    border-bottom: 1.5px solid rgb(74, 104, 161);
    /* Agrega la línea solo debajo del campo de texto */
    flex-grow: 1;
    /* Permite que el campo de texto ocupe todo el espacio restante */
    margin-right: 25px;
}

.custom-button {
    padding: 7px 40px;
    /* Ajusta el ancho y alto del botón según tu preferencia */
    border: 2px solid rgb(74, 104, 161);
    /* Establece el grosor y color del borde */
    border-radius: 10px;
    /* Agrega bordes redondeados si lo deseas */
    background-color: transparent;
    /* Fondo transparente */
    transition: background-color 0.3s;
    /* Agrega una transición al color de fondo */

    /* Estilos cuando se pasa el cursor por encima del botón */
    &:hover {
        background-color: rgb(74, 104, 161);
        /* Cambia el color de fondo al pasar el cursor */
        border: 2px solid #ccc;
        color: #fff;
        /* Cambia el color del texto al pasar el cursor */
    }
}

.form-check-input[type=checkbox] {
    border: 1.5px solid #525252;
    box-shadow: none;
}

.form-check-input[type=checkbox]:checked {
    background-color: rgb(74, 104, 161);
}

.form-check-input[type=checkbox]:hover {
    box-shadow: 0 0 5px rgb(74, 104, 161);
}

.pass-link {
    color: rgb(74, 104, 161);
}

.pass-link:hover {
    color: #525252;
}

.flip-vertical-right {
    animation: flip-vertical-right 2s cubic-bezier(0.950, 0.050, 0.795, 0.035) both;
}

.flip-vertical-left {
    animation: flip-vertical-left 2s cubic-bezier(0.950, 0.050, 0.795, 0.035) both;
}


@keyframes flip-vertical-right {
    0% {
        transform: rotateY(0);
    }

    50% {
        transform: rotateY(90deg);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes flip-vertical-left {
    0% {
        transform: rotateY(0);
    }

    50% {
        transform: rotateY(-90deg);
    }

    100% {
        transform: rotateY(-180deg);
    }
}</style>