import React, { useEffect, useState } from 'react';
import './App.css';
import api from "./services/api";

interface IProduct{
  id: number,
  name: string,
  value: number
}

interface ICart{
  products: IProduct[]
}

function App() {

  const storedCart = JSON.parse(localStorage.getItem("insper@car/shop") as string)

  const [products, setProducts] =  useState<IProduct[]>([])
  const [cart, setCart] =  useState<ICart>(storedCart ? storedCart : {products: [], total: 0})

  useEffect(() => {
    async function getProducts(){
      const response = await api.get("products")
  
      if (!response.data){
        return
      }
  
      const apiProducts = response.data
  
      setProducts(apiProducts)
  
    }

    getProducts()

  }, [setProducts])

  function handleAddToCart(productToAdd: IProduct){
    setCart(state => {
      const foundProduct = state.products.find((product: IProduct) => product.id === productToAdd.id)

      if (foundProduct){
        return state
      }

      const updatedProducts = [...state.products, productToAdd] as IProduct[]

      const totalCart = updatedProducts.reduce((sum, product) => {
        const total = sum + product.value
        return total
      }, 0)

      const updatedState = {
        products: updatedProducts,
        total: totalCart
      }

      localStorage.setItem("insper@car/shop", JSON.stringify(updatedState))

      return updatedState

    })
  }
  

  return (
    <div className="App">
      <main>
        {products.map(product => (
          <div className="product" key={product.id}>
            <p>{product.name}</p>
            <p>{Intl.NumberFormat("pt-BR", {currency: "BRL", style:"currency"})
                .format(product.value)}</p>
            <button>Adicionar ao carrinho</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
