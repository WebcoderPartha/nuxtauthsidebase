<template>
    <div>
        <h2>Add</h2>
        {{ db }}
        <button @click="add">add</button>
    </div>
</template>

<script setup>
    const db = useDatabase()
    const data =   {name: 'partha', email: 'partha@gmail.com', username: 'partha', password: 'partha'}
    const add = () => {
        db.value.push(data)
    }
</script>

<style lang="scss" scoped>

</style>