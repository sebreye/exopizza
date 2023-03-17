import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addTask } from '../../PizzaSlice'
const PizzaPicked = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const pizza = location.state.pizza
    const AjoutPanier = pizza =>{
        dispatch(addTask(pizza))
    }
    const navigate = useNavigate()
    const VersPanier = () =>{
        navigate('/panier')
    }
return (
    <div>
        <div>
            <img src={pizza.image} alt="" style={{width: 350}}/>
            <p>{pizza.nom}</p>
            <p>{pizza.prix}</p>
            <ul>
                        {
                            pizza.ingredients.map((element) =>{
                                return <li>{element}</li>
                            })
                        }
                    </ul>
                    <button onClick={() => AjoutPanier(pizza)}>Ajouter au panier</button>
                    <button onClick={() =>{
                        VersPanier()
                    }}>Vers Panier</button>
        </div>
    </div>
    )
}

export default PizzaPicked