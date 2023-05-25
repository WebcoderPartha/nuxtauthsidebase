export const useDatabase = () => {
    return useState(() => [
        { id: '1', name: 'Partha', username: 'partha', password: 'partha', email: 'partha@gmail.com' },
          { id: '2', name: 'Johm', username: 'mitu', password: 'mitu', email: 'mitu@gmail.com' },
          { id: '3', name: 'Linkon', username: 'tumpa', password: 'tumpa', email: 'tumpa@gmail.com' },
          { id: '4', name: 'God', username: 'mizan', password: 'mizan', email: 'mizan@gmail.com' }
    ])
}