<template>

    <div class="container bg-light position-absolute top-50 start-50 translate-middle rounded-4 shadow">

        <div v-if="view === 'login'" id="animationContainerLogin" class="container-login flip-vertical-right">

            <div class="row align-items-start">

                <div class="col-lg-6 bg-primary p-3">

                    <div class="bg-light p-3 rounded-4 shadow">

                        <form action="#">

                            <h2 class="text-center mb-3">Login</h2>
                            <div class="mb-3 d-flex">
                                <span class="input-group-text"><i class="bi bi-person"></i></span>
                                <input type="email" class="form-control" placeholder="email">
                            </div>

                            <div class="mb-3 d-flex">
                                <span class="input-group-text" style="background: transparent; border: transparent;"><i
                                        class="bi bi-key"></i></span>
                                <input type="password" class="form-control" placeholder="password"
                                    style="background-color: rgb(233, 233, 233); border: transparent;">
                            </div>


                            <div class="content mb-3">
                                <div class="checkbox mb-3">
                                    <input type="checkbox" class="form-check-input" name="checkbox" id="checkbox">
                                    <label for="checkbox" class="form-check-label">Remember me</label>
                                </div>
                                <div class="pass-link">
                                    <a type="button" @click="changeRoute('forgot')">Forgot password</a>
                                </div>
                            </div>

                            <button type="submit">Login</button>

                            <a type="button" @click="changeRoute('register')" id="startAnimationButtonLogin" class="btn btn-primary">Go to Register</a>
                        </form>

                    </div>



                </div>

                <div class="col-lg-6">

                    <h2 class="text-center">Otro lado</h2>

                </div>

            </div>

        </div>

        <div v-else-if="view === 'register'" id="animationContainerRegister" class="container-register flip-vertical-left">

            <div class="row align-items-start">

            <div class="col-lg-6">

                <h2 class="text-center">Otro lado</h2>

            </div>

            <div class="col-lg-6 bg-primary p-3">

                <div class="bg-light p-3 rounded-4 shadow">

                    <form action="#">

                        <h2 class="text-center mb-3">register</h2>
                        <div class="mb-3 d-flex">
                            <span class="input-group-text"><i class="bi bi-person"></i></span>
                            <input type="email" class="form-control" placeholder="email">
                        </div>

                        <div class="mb-3 d-flex">
                            <span class="input-group-text" style="background: transparent; border: transparent;"><i
                                    class="bi bi-key"></i></span>
                            <input type="password" class="form-control" placeholder="password"
                                style="background-color: rgb(233, 233, 233); border: transparent;">
                        </div>




                        <button type="submit">Register</button>

                        <button type="button" id="startAnimationButtonRegister" class="btn btn-primary" @click="changeRoute('login')">Go to Login</button>
                    </form>

                </div>



            </div>

        </div>

    </div>

        <div v-else-if="view === 'forgot'" id="animationContainerForgot" class="container-forgot flip-vertical-left">

            <div class="row align-items-start">

<div class="col-lg-6">

    <h2 class="text-center">Otro lado</h2>

</div>

<div class="col-lg-6 bg-primary p-3">

    <div class="bg-light p-3 rounded-4 shadow">

        <form action="#">

            <h2 class="text-center mb-3">Cambio contraseña</h2>
            

            <button type="button" id="startAnimationButtonRegister" class="btn btn-primary" @click="changeRoute('login')">Go to Login</button>
        </form>

    </div>

</div>



</div>
           
        </div>


    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const view = ref('login');
const router = useRouter();


const changeRoute = (newView) => {
  view.value = newView;
  router.push({ name: newView }); // Cambiar la ruta al hacer clic
};

onMounted(() => {

  // Establecer la vista predeterminada en base a la ruta actual
  const currentRoute = router.currentRoute.value;
  if (currentRoute.name) {
    view.value = currentRoute.name;
  }
});


</script>

<style scoped>
.container {
    width: 600px;
    height: 400px;
}

.flip-vertical-right {
	animation: flip-vertical-right 1.5s cubic-bezier(0.950, 0.050, 0.795, 0.035) alternate-reverse both;
}
.flip-vertical-left {
	animation: flip-vertical-left 1.5s cubic-bezier(0.950, 0.050, 0.795, 0.035) alternate-reverse both;
}


 @keyframes flip-vertical-right {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
}
@keyframes flip-vertical-left {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
}



</style>
