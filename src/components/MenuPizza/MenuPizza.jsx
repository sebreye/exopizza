import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PizzaPicked from '../PizzaPicked/PizzaPicked'
import { sortPizzaByPrice } from '../../PizzaSlice'
const MenuPizza = () => {
    const pizzas = useSelector(state => state.pizzas.menu)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pizzapick = (pizza) => {
        navigate(`/pizzapick/${pizza.id}`, { state: { pizza } });
        }
    const handleSortByPrice = (event) => {
            dispatch(sortPizzaByPrice(event.target.value));
        }
return (
    <div>
        <select name="prix" onChange={handleSortByPrice}>
                <option value="">-- Trier par prix --</option>
                <option value="asc">Prix croissant</option>
                <option value="desc">Prix décroissant</option>
            </select>
        <div>
            {pizzas.map(pizza =>(
                <div key={pizza.id} onClick={() => pizzapick(pizza)}>
                    <img src={pizza.image} alt="" style={{width: 150}} />
                    <p>{pizza.nom}</p>
                    <p>{pizza.prix}</p>
                    <ul>
                        {
                            pizza.ingredients.map((element) =>{
                                return <li>{element}</li>
                            })
                        }
                    </ul>
                </div>
            ))}
        </div>
    </div>
    )
}

export default MenuPizza