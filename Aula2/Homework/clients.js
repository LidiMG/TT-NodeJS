const clients = [
    {name: 'Cícero Feijó', city: 'Porto Alegre'},
    {name: 'Ana Paula', city: 'Canoas'},
    {name: 'Maria Luiza', city: 'Novo Hamburgo'},
    {name: 'Paulo Roberto', city: 'Porto Alegre'},
]

export function getClientsByCity(city){
    return clients.filter(clients => {
        return clients.city == city
    }) 
}

export default getClientsByCity