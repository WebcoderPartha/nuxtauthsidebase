<template>
    <div class="container">
        <MenuBar></MenuBar>
        <slot/>
    </div>
</template>

<script setup lang="ts">
    useHead({
        link:[
            {
                rel: 'stylesheet',
                href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
            }
        ],
        script:[
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js',
                tagPosition: 'bodyClose'
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
                tagPosition: 'bodyClose'
            }
        ]
    })
</script>

<style scoped>

</style>