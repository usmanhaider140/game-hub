import React, {useEffect, useRef, useState} from "react";
import ProductList from "./ProductList";
// import Like from "./components/Like";
// import ExpandableText from "./components/ExpandableText";
// import FormExercise from "./components/FormExercise";
// import Form from "./components/Form";
// import FormExercise from "./components/Form/FormExercise";

// const [player, setPlayer] = useState({
//   id: 1,
//   player: {
//     name: "Shan",
//   },
// });
// const [pizza, setPizza] = useState({
//   name: "Spicy Star",
//   toppings: ["Mushroom"],
// });

// const [cart, setCart] = useState({
//   discount: 0.1,
//   items: [
//     { id: 1, title: "Product 1", quantity: 1 },
//     { id: 2, title: "Product 2", quantity: 1 },
//   ],
// });

// const handleShowAlert = () => {
//   setShowAlert(!showAlert);
//   setPlayer((player) => ({
//     ...player,
//     player: {
//       ...player.player,
//       name: "shikki mikk",
//     },
//   }));
//   setPizza({
//     ...pizza,
//     toppings: [...pizza.toppings, "Chilli milli"],
//   });
//   setCart({
//     ...cart,
//     items: cart.items.map((item) =>
//       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//     ),
//   });
// };
export const State = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [category,setCategory] = useState<string>('')

    //   after Render
    useEffect(() => {
        //     Side Effect
        if(inputRef.current) inputRef.current?.focus()
    }, [])

    return (
        <div>
            {/* <Form /> */}
            <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
                <option value=""></option>
                <option value="clothing">Clothing</option>
                <option value="household">HouseHold</option>
            </select>
            <ProductList category={category}/>
        </div>
    )
}

export default State