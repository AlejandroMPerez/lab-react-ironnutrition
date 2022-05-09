import React from 'react';

function FoodForm(props) {
  const [name, setName] = React.useState("");
  const [calories, setCalories] = React.useState("");
  const [image, setImage] = React.useState("");

  
  function addNewFood(e) {
    e.preventDefault();

    let foodToBeAdded = {
        name: name,
        calories: calories,
        image: image,
        quantity: 0
    };

    props.setFoodArr(props.foodArr.concat(foodToBeAdded))

  }

  return (
  <form onSubmit={addNewFood}>

    <label>Image</label>
    <input
        onChange={(e) => setImage(e.target.value)}
        name="image"
        value={image}
    />

    <label>Name</label>
    <input
        onChange={(e) => setName(e.target.value)}
        name="name"
        value={name}
    />

    <label>Number of Calories</label>
    <input
        onChange={(e) => setCalories(e.target.value)}
        name="calories"
        value={calories}
    />

    <button type="submit">Create Food</button>
  </form>
  )
}

export default FoodForm;
