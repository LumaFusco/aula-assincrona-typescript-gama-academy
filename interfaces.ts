interface Usuario {                       //é assim que se cria uma interface       
nome: string;
email: string;
address?: string;                        // como tem ? significa que é opicional
} 

function getUser(): Usuario {             //estamos usando a interface USUARIO como um type
return {
    nome: "Luma",
    email: "lumafuscoconde@gmail.com"
}
}

function setUser(usuario: Usuario) {   //pode ser usado desta forma tbm, avisando que o usuário que vou receber é do type Usuário
// .......
}