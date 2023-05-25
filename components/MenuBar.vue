
<template>
 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

<div class="container-fluid">
  <!-- Links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <NuxtLink class="nav-link" v-if="!authenticate" to="/">Login</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" v-if="!authenticate" to="/register">Register</NuxtLink>
    </li>
    <li class="nav-item">
      <NuxtLink class="nav-link" v-if="authenticate" href="/admin">Dashboard</NuxtLink>
    </li>
    <li class="nav-item">
      <a class="nav-link btn btn-danger" v-if="authenticate" @click="logout" to="#">Logout</a>
    </li>
  </ul>
</div>

</nav>
</template>

<script setup>
const { $swal } = useNuxtApp()

const Toast = $swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', $swal.stopTimer)
    toast.addEventListener('mouseleave', $swal.resumeTimer)
  }

})

// End Sweet alert
    const {signOut, status} = useAuth()
    const logout = async () => {
      await signOut({callbackUrl:'/'})
      Toast.fire({
        icon: 'success',
        title: 'Logout in successfully!'
        })
    }
    const authenticate = computed(()=> status.value==='authenticated')
</script>

<style scoped>

</style>