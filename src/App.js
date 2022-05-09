import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';


function App() {
  const [foodArr, setFoodArr] = React.useState(foods)

  return (
    <div>
      <FoodForm setFoodArr={setFoodArr} foodArr={foodArr}/>

      {foodArr.map((individualFood) => {
        return (
          <FoodBox 
            food={individualFood} 
          />
        )
      })}
     
    </div>
  );
}

export default App;
