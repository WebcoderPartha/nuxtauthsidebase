<template>
    <div>
        <button @click="ok">Click</button>
    </div>
</template>

<script setup>
// Sweet Alert Use //
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

// End Sweet Alert


const ok = () => {
   // Sweet Alert
   Toast.fire({
        icon: 'success',
        title: 'Siccess'
        })
}
</script>

<style lang="scss" scoped>

</style>