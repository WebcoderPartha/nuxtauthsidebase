import { getServerSession } from '#auth'




    export default eventHandler(async (event) => {
      const session = await getServerSession(event)
      if(!session){
        return {status: 'unathenticated'}
      }
    
      return {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
        access_token: session.user.access_token,
      }
    })
