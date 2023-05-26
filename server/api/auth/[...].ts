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
        token.username = user ? user.username || '' : '';
      }
      return Promise.resolve(token);
    },
    // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    session: async ({session, token}) => {
      (session as any).user.id = token.id;
      (session as any).user.username = token.username;
      return Promise.resolve(session);
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
    
      // credentials: {
      //   username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
      //   password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' }
      // },
      authorize (credentials: any) {


        const users = [
          { id: '1', name: 'Partha', username: 'partha', password: 'partha', email: 'partha@gmail.com' },
          { id: '2', name: 'Johm', username: 'mitu', password: 'mitu', email: 'mitu@gmail.com' },
          { id: '3', name: 'Linkon', username: 'tumpa', password: 'tumpa', email: 'tumpa@gmail.com' },
          { id: '4', name: 'God', username: 'mizan', password: 'mizan', email: 'mizan@gmail.com' }
        ]
        

        const authUser = users.find( (user:any) => user.username === credentials?.username && user.password === credentials?.password)

        if(authUser){
          const data = {
            id: authUser.id,
            name: authUser.name,
            email: authUser.email,
            username: authUser.username,
          }
          return data
        }
        // if (authUser.len) {
        //   return authUser
        // } else {
 
        //   console.error('Warning: Malicious login attempt registered, bad credentials provided')

       
        //   return null

     
        // }
      }
    })
  ]
})
