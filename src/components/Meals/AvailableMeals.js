import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'KULFI',
      description: 'The dense and creamy Indian treat',
      price: 2,
    },
    {
      id: 'm2',
      name: 'MOCHI',
      description: 'Rice cakes of mochi dough filled with frozen goodness from Japan',
      price: 5,
    },
    {
      id: 'm3',
      name: 'FROZEN YOGURT',
      description: 'Classic fro-yo sprinkled with whatever your sweet tooth craves',
      price: 3,
    },
    {
      id: 'm4',
      name: 'ITALIAN ICE',
      description: 'The love derived from the Sicilian granita',
      price: 5,
    },
  ];

const AvailableMeals = () =>{
    const mealsList = DUMMY_MEALS.map(meal => <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
        />)

    return <section className={classes.meals}>
        <Card>
           <ul>{mealsList} </ul>
        </Card>
    </section>
}

export default AvailableMeals