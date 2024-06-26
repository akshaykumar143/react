import { useState } from 'react';
import './App.css';
import Bmilist from './components/Bmilist';
import Bmiscore from './components/Bmiscore';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [bmi, setbmi] = useState('0')
  const [bmiType, setbmiType] = useState(" ")
  const [wtpe, setwtpe] = useState({ type:'',msg:""})
  const [bmiList, setbmiList] = useState({
    underweight:{ id : 1 , label: "Under Weight",  range:"0 - 18",     low: '', high: '' },
    normal:     { id : 2 , label: "Normal Weight", range:"18.1 - 27.9",low: '', high: '' },
    overweight: { id : 3 , label: "Over Weight",   range:"28 - 31.9",  low: '', high: '' },
    obesityOne: { id : 4 , label: "Obesity One",   range:"32 - 37.9",  low: '', high: '' },
    obesityTwo: { id : 5 , label: "Obesity Two",   range:"38-",        low: '', high: '' }
  });
  const getFormData = (h, w) => {
    h = h / 100;
    let b = calcBmi(h, w)
    setbmi(b)
    setbmiType(calcBmiType(b))
    setbmiList({
    underweight:{ "id":1, label: "Under Weight",range:"0 - 18",       low: calcWeight(18, h)  , high: '' },
    normal:     { "id":2, label: "Normal Weight",range:"18.1 - 27.9", low: calcWeight(18.1, h), high: calcWeight(27.9, h)},
    overweight: { "id":3, label: "Over Weight",range:"28 - 31.9",     low: calcWeight(28, h)  , high: calcWeight(31.9, h)},
    obesityOne: { "id":4, label: "Obesity One",range:"32 - 37.9",     low: calcWeight(32, h)  , high: calcWeight(37.9, h)},
    obesityTwo: { "id":5, label: "Obesity Two",range:"38-",           low: ''                 , high: calcWeight(38, h)  }


    });
    setwtpe(calWtType(b,w));
  }
  const calcBmi = (h, w) => (w / (h * h)).toFixed(2);
  const calWtType = ( b, w) => {
    let eObject;
  
    if( b< 18){
      eObject= { type:'under weight',msg:" gain "+( w- bmiList.normal.low )};
    }else if(b >28){
      eObject= { type:'over weight',msg:" reduce "+( bmiList.normal.high-w )};
    }else{
      eObject= { type:'Normal',msg:"well done"};

    }
   return eObject;
  }
  const calcWeight = (b, h) => (b * h * h).toFixed(2);
  const calcBmiType = (bmi) => {
    if (bmi < 18) {
      return "under weight";
    } else if (bmi < 28) {
      return "normal";
    } else if (bmi < 32) {
      return "over weight";
    } else if (bmi < 38) {
      return "obesity class weight 1";
    } else if (bmi >= 38) {
      return "obesity class 2";
    }
  };

  return (
    <>
      <div className='container row'>
        <div className='col-7 mt-3 mx-auto'>
          <Header />
        </div>
        <div className='col-8  mx-auto'>
          <Form getFormData={getFormData} />
        </div>
        <div className='col-10 d-flex mx-auto'>
          <Bmiscore bmiNo={bmi} bmiName={bmiType}  wtpe={wtpe} />
          <Bmilist range={bmiList} bmi={bmi} />
        </div>
      </div>
    </>
  );
}

export default App;
