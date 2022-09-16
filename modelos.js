const usuarios = [
    {id: 1, nome: 'Jose', bonus: 500},
    {id: 2, nome: 'João', bonus: 100},
    {id: 3, nome: 'Lucas', bonus: 690},
    {id: 4, nome: 'Maria', bonus: 1000},
]
const result = usuarios.filter(usuario => {
    return usuario.bonus >= 500;
})
console.log(result);

document.getElementById("model").innerHTML = `Quantidade de registro: ${result.length}`;
