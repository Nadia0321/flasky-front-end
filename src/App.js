
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import './App.css';
// import Cat from './components/Cat.js';
// to use Cat function we need to import
import CatList from "./components/CatList.js";
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewCatForm from './components/NewCatForm';

// const DATA = [
//   {
//     id: 1,
//     name: "Ubik",
//     caretaker: "Maria",
//     color: "grey",
//     personality: "wild child",
//     petCount: 1
//   }],
//   {
//     id: 2,
//     name: "Pepper",
//     caretaker: "Mark",
//     color: "black",
//     personality: "spicy",
//     petCount: 4
//   },
//   {
//     id: 3,
//     name: "Binx",
//     caretaker: "Susan",
//     color: "tuxedo",
//     personality: "feral",
//     petCount: 2
//   },
// ];
const kBaseURL = 'http://127.0.0.1:5000';

function App() {


  const [catData, setCatData] = useState([])

  const onhandleSubmit = (data) => {
    axios
      // data is request body that is an object
      // why I can not put response.data in an array [] to make it an array and pass to Kuinsite convertor?????==========================================================================
      .post(`${kBaseURL}/cats`, data)
      .then(response => {
        setCatData((preData) => [catDataConverterZoisite(response.data), ...preData])
        console.log([response.data])
      })
      .catch(err => console.log(err))
  }

  const catDataConverterZoisite = (obj) => {
    const { name, color, id, personality, caretaker, pet_count } = obj
    const newCat = { name, color, id, personality, caretaker, petCount: pet_count }
    return newCat
  }
  const catDataConverter = (catData) => {
    return catData.map((cat) => {
      return { ...cat, petCount: cat.pet_count, caretaker: 'Maria' }
    })
  }

  useEffect(() => {
    axios
      .get(`${kBaseURL}/cats`)
      .then(response => setCatData(() => catDataConverter(response.data)))
      .catch(err => console.log(err))
  }, [])

  const increasePets = (id) => {
    setCatData(() => catData.map((cat) => {
      if (cat.id === id) {
        // here it copy that cat that is an object in out object and we update the cat.petCount
        return { ...cat, petCount: cat.petCount + 1 };
      } else {
        return cat;
      }

    }));

    axios
      .patch(`${kBaseURL}/cats/${id}/pet`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  const onUnregisterCat = id => {
    setCatData((catData) => catData.filter((cat) => {
      return cat.id !== id;
    }));
    axios
      .delete(`${kBaseURL}/cats/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };

  const onDeleteAll = () => {
    setCatData(() => [])
  }

  const calculateTotalPets = (catData) => {
    let initial_value = 0
    return catData.reduce((total, cat) => {
      return total + cat.petCount;
    }, initial_value);
  }

  // whyyyy is catData not updated?==============================
  const totalKitty = calculateTotalPets(catData);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Flasky </h1>
        <NewCatForm onhandleSubmit={onhandleSubmit} />
        <h2> totalkitty:  {totalKitty}  </h2>
        {/* catData name comes from the state name */}
        <CatList catData={catData} onPetCat={increasePets} onUnregisterCat={onUnregisterCat} onDeleteAll={onDeleteAll} />

      </header>
    </div>
  );
}


export default App;
