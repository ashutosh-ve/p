import { useSelector } from "react-redux";
import { removeCar } from "../store";
import { useDispatch } from "react-redux";
import { useReducer } from "react";

function CarList() {
    const dispatch = useDispatch();

    const cars = useSelector(({cars: {data,searchTerm}})=>{
        return data.filter((car)=>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    })
    

    const handleCarDelete=(car)=>{
        dispatch(removeCar(car.id));
    }
   
// this is just a comment 
    
    const renderedCars= cars.map((car)=>{
        return (
            <div id={car.id} className="panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button onClick={()=>handleCarDelete(car)} className="danger is-danger">Delete</button>

            </div>
        )
    })

    return <div className="car-list">
        {renderedCars}
    </div>
}

export default CarList;