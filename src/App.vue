<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" v-if="userStore.loadingSession = true">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" v-if="userStore.userData">Navbar</router-link>
      <router-link to="/Login" class="navbar-brand" v-if="!userStore.userData">Navbar</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/" v-if="userStore.userData">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Login" v-if="!userStore.userData">Login</router-link>

          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Register" v-if="!userStore.userData">Registro</router-link>

          </li>
          <li>
            <button @click="userStore.logoutUser" class="btn btn-outline-danger" v-if="userStore.userData">Cerrar sesion</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div v-else>
      loading . . .
  </div>
  <router-view></router-view>
</template>

<script setup>
import { useUserStore } from './stores/user';


  const userStore = useUserStore()
</script>