<template>
    <div class="container text-center">
        <div class="row p-5 align-items-center">
            <div class="col">

            </div>
            <div class="col align-self-center">
                <div class="card shadow-sm" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title text-center  ">Iniciar Sesión</h5>
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-3">
                                <label for="email" class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com"
                                v-model.trim="email"  required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="********"
                                v-model.trim="password"  required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import {useUserStore} from "../stores/user"
    
    const email = ref('diosce@gmail.com')//debe quedar vacio solo es test
    const password =ref('12345') //debe quedar vacio solo es test
    const userStore = useUserStore()

    const handleSubmit = async ()=>{
        
        console.log(email.value);
        if(!email.value || password.value.length < 4){
            return alert ("llena los campos")
        }

        await userStore.loginUser(email.value,password.value)
        
    }

</script>