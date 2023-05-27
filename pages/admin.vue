<template>
    <div>
      <pre>
      {{ mydata }}
    </pre>
    </div>
  </template>
  <script setup lang="ts">
    //  definePageMeta({
    //     middleware: 'auth'
    // })
 
  const {data} = await useFetch('/api/me')
  
  console.log(data.value.access_token)
  const mydata = await useFetch('http://127.0.0.1:8000/api/auth/me', {
    method: 'get',
    headers: {
      authorization: "Bearer " + data.value.access_token
    }
  })
  </script>