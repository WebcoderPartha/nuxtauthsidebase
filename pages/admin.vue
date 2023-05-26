<template>
    <div>
        <h2>admin</h2>
        <pre>
        <!-- {{ database }} -->
    </pre>
        <pre>
            {{ session }}
        </pre>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth'
    })
    const database = useDatabase()
    const session = await useFetch('/api/me')
</script>

<style lang="scss" scoped>

</style>