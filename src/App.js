import './App.css';
import { useState } from "react";

import CartProvider from './Store/CartProvider'
import Header from './Components/Header';
import MedicineForm from './Components/MedicineForm';
import MedicineList from './Components/MedicineList';

function App() {
  const [medicines, setMedicines] = useState([]);
  const addMedicineHandler = (medicine) => {
    setMedicines((prevMedicines) => [...prevMedicines, medicine]);
  };
  return (
    <CartProvider>
      <Header/>
      <MedicineForm onAddMedicine={addMedicineHandler}/>
      <MedicineList medicines={medicines}/>
   
    </CartProvider>
  );
}

export default App;
