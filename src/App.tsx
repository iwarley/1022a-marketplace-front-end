import { useEffect, useState } from 'react'
import './App.css'
type ProdutoType = {
  id:number,
  nome:string,
  preco:string,
  descricao:string,
  imagem:string
}
function App() {
  const [nome, setNome] = useState("")
  const [produtos,setProdutos] = useState([])
  //useEffects(O que fazer, quando fazer) []=> Hora do carregamento
useEffect(()=>{
  setNome("iwarley quelis pique")
  //buscar os dados do backend
  fetch("https://one022a-marketplace1.onrender.com/produtos")
  .then(resposta=>resposta.json())
  .then(dados=>setProdutos(dados))
  //colocar em uma variavel
},[])
{  
  produtos.map(produto =>)
  return (
    <>
      <h1>{nome}</h1>
      <div className='produtos-container'>
        <div className='produto-item'>
          <h1>Nome</h1>
          <p>Imagem</p>
          <p>Preço</p>
          <p>Descrição</p>
        </div>
      </div> 
    </>
  )
}}


export default App
