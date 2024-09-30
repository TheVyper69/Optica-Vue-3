<template>
    <div>
        <h1>home</h1>
        <h2>Hola {{ userStore.userData.name }}</h2>
    </div>
</template>

<script setup>
    import { useUserStore } from "../stores/user";
    const userStore = useUserStore();
</script>