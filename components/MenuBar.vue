
<template>
 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <NuxtLink class="nav-link" v-if="!authenticate" to="/">Login</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" v-if="authenticate" href="/admin">Dashboard</NuxtLink>
    </li>
    <li class="nav-item">
      <a class="nav-link btn btn-danger" v-if="authenticate" @click="signOut({callbackUrl:'/'})" to="#">Logout</a>
    </li>
  </ul>
</div>

</nav>
</template>

<script setup lang="ts">
    const {signOut, status} = useAuth()
    const authenticate = computed(()=> status.value==='authenticated')
</script>

<style scoped>

</style>