// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'
import { useDatabase } from '../../../composables/database'

export default NuxtAuthHandler({

  secret: 'your-secret-here',
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: '/'
  },
  callbacks: {
    // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
    jwt: async ({token , user}) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user ? user.id || '' : '';
        token.access_token = user ? user.access_token || '' : '';
      }
      return Promise.resolve(token);
    },
    // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    session: async ({session, token}) => {
      session.user.access_token = token.access_token
      session.user.id = token.id
      return Promise.resolve(session);
    },
  },
  providers:  [

     CredentialsProvider.default({

      name: 'Credentials',
    
    
      async authorize (credentials) {

        
        const config = useRuntimeConfig()
        const data = await $fetch(`${config.apiBaseUrl}/auth/login`, {
          method:'POST',
          body: {
            email: credentials.username,
            password: credentials.password
          }
          
        })        
    

        if(data.id){
         
          return {
            id:data.id,
            name:data.name,
            email: data.email,
            access_token: data.access_token
          }

        }else{
          throw createError({
            statusCode: 403,
            statusMessage: "Invalid email or paassword!",
          });
        }

        // navigateTo('/')

 
      }
    })
  ]
})
