<template>
    <div>
      
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="card mt-5">
                    <div class="card-header">
                        <h2>Login page</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group p-3">
                                <input type="text" class="form-control" placeholder="Username">
                            </div>  
                            <div class="form-group p-3">
                                <input type="password" class="form-control" placeholder="password">
                            </div>  
                            <div class="form-group p-3 text-center">
                                <input type="submit" class="btn btn-primary" value="Log In">
                            </div>    
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