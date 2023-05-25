<template>
    <div>
      
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h2>Login page</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth',
        auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/admin',
        }
    })
</script>

<style scoped>

</style>