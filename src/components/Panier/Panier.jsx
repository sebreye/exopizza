import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTask } from '../../PizzaSlice'
const Panier = () => {
    const dispatch = useDispatch()
    const paniers = useSelector(state => state.pizzas.panier)
    const totalprice = useSelector(state => state.pizzas.Pprice)
    const handleRemoveTask = panier =>{
        dispatch(removeTask(panier))
    }
  return (
    <div>
        <h1>Votre Panier</h1>
        <ul>
        {paniers.map((panier, index) => (
            <li key={index}>
                <img src={panier.image} alt="" style={{width: 150}}/>
                <p>{panier.nom}</p>
                <p>{panier.prix}</p>
                <button onClick={() => handleRemoveTask(panier)}>supprimer</button>
            </li>
            ))}
        </ul>
        <h2>Total : {totalprice.toFixed(2)}</h2>
    </div>
  )
}

export default Panier