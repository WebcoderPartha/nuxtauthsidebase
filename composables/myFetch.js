import { getServerSession } from '#auth'

export const useServerFetch =  async (url) => {



    eventHandler(async (event) => {
      const session = await getServerSession(event)
      if(!session){
        return {status: 'unathenticated'}
      }
    
      const data = await $fetch(url, {
        headers: {
          authorization: `Bearer ${session.user.access_token}`
        }
      })
      
      
    
      return data
    })

}