<template>
    <div>
        <h2>admin</h2>
        {{ database }}
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
    const database = useDatabase()
</script>

<style lang="scss" scoped>

</style>