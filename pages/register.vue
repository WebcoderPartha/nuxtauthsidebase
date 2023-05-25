<template>
    <div>
      
        <div class="row">
            <div class="col-md-4 mx-auto">
                <div class="card mt-5">
                    <div class="card-header">
                        <h2>Register page</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <div class="form-group p-3">
                                {{ form.name }}
                                <input type="text" class="form-control" v-model="form.name" placeholder="Name">
                            </div>
                            <div class="form-group p-3">
                                {{ form.username }}
                                <input type="text" class="form-control" v-model="form.username" placeholder="Username">
                            </div>  
                            <div class="form-group p-3">
                                {{ form.email }}
                                <input type="text" class="form-control" v-model="form.email" placeholder="email">
                            </div> 
                            <div class="form-group p-3">
                                <input type="password" v-model="form.password" class="form-control" placeholder="password">
                                {{ form.password }}
                            </div> 
                          
                            <div class="form-group p-3 text-center">
                                <input type="submit" class="btn btn-primary" value="Sign Up">
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Register Page'
    })

    definePageMeta({
        middleware: 'auth',
        auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/admin',
        },
    })

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

// End Sweet alert

    const form = useState(()=> ({
        name: '',
        username: '',
        email: '',
        password: ''
    }))

    const {signIn} = useAuth()
    const db = useDatabase()

    const register = async (e) => {
        const username = form.value.username
        const password = form.value.password
        const email = form.value.email
        const name = form.value.name

        const data = { id: '5', name: name, username: username, password: password, email: email }

        db.value.push(data)

        await signIn('credentials', {username, password, callbackUrl: '/admin'})
     
        e.target.reset()
        Toast.fire({
        icon: 'success',
        title: 'Logged in successfully!'
        })

    }


</script>

<style scoped>

</style>