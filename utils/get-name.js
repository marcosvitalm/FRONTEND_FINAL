export async function getName() {
    const token = localStorage.getItem ("token")

    if(!token) {
        return
    }
   
    const response = await fetch("http://localhost:3000/getname", {
        headers: {
            "Authorization": token
        }
            
    }).then(response => response.json())
    
    
    const name = await getName()

    const nameP = document.querySelector(".user p")
    nameP.innerText = `Usuário: ${response.name}`
}
    