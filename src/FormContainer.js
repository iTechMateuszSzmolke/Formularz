import Input from "@mui/joy/Input";
import React, {useEffect, useRef, useState} from 'react';
import PDFContainer from "./PDFContainer";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import PriceFormater from "price-to-words-pl"

const FormContainer = () => {

    const [btnPopUp, setBtnPopUp] = useState(false);

    const [placeOfSigning, setPlaceOfSignings] = useState ('')
    const [names, setNames] = useState ('')
    const [names2, setNames2] = useState ('')
    const [zipCode, setZipCode] = useState ('')
    const [zipCode2, setZipCode2] = useState ('')
    const [street, setStreet] = useState('')
    const [street2, setStreet2] = useState('')
    const [number, setNumber] = useState('')
    const [number2, setNumber2] = useState('')
    const [apartmentNumber, setApartmentNumber] = useState('')
    const [apartmentNumber2, setApartmentNumber2] = useState('')
    const [place, setPlace] = useState('')
    const [place2, setPlace2] = useState('')
    const [timeLimit, setTimeLimit] = useState('')
    const [advance, setAdvance] = useState()
    const [totalPrice, setTotalPrice] = useState()


    const [state, setState] = useState([{
        name: ''
    }])

    const [checked, setChecked] = useState(true)


   const handleClick = () => {

        const enteredName = prompt('Nazwa produktu');

       const newData = {
           name: enteredName
       }

           const newArray = [...state, newData]
           const elementEmpty = newArray.filter(x => x.name != '' && x.name !== null)
           setState(elementEmpty)
       }



    const handleSelectElement = (x) => {

        const remove = state.filter(e => e.name !== x.name)
        setState(remove)
    }

    const handleEnablePopUp = () => {
        setBtnPopUp(true)
    }


    return (
        <div className="App">
            <div className={"Form"}>
                <p className={"HeaderForm"}>Umowa na wykonanie mebli:</p>
                <div className={"FormInput"}>
                    <div className={"CategoryName"}>Dane klienta</div>
                    <div className={"InputContainer"}>
                        <div className={"TwoElementContainer"}>
                            <Input className={"OneElementContainer"} type={"text"} placeholder={"imi?? i nazwisko"} value={names} onChange={e => setNames(e.target.value)}/>
                        </div>
                        <div className={"TwoElementContainer"}>
                            <Input className={"OneElementContainer"} placeholder={"kod pocztowy"} value={zipCode} onChange={e => setZipCode(e.target.value)}/>
                            <Input className={"OneElementContainer"} placeholder={"miejscowo????"} value={place} onChange={e=> setPlace(e.target.value)}/>
                        </div>

                        <div className={"TwoElementContainer"}>
                            <Input className={"OneElementContainer"} placeholder={"ulica"} value={street} onChange={e=> setStreet(e.target.value)}/>
                            <Input className={"OneElementContainer"} placeholder={"nr budynku"} value={number} onChange={e=> setNumber(e.target.value)}/>
                            <Input className={"OneElementContainer"} placeholder={"nr mieszkania"} value={apartmentNumber} onChange={e=> setApartmentNumber(e.target.value)}/>
                        </div>

                    </div>
                </div>

                <div className={"FormInput"}>
                    <div className={"CategoryName"}>Miejsce wykonania us??ugi</div>
                    { checked === true ?
                        <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked onChange={(x) => setChecked(false)}/>} label="Taki sam jak powy??ej" />
                        </FormGroup>
                        :
                        <div className={"InputContainer"}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={(x) => setChecked(true)}/>} label="Taki sam jak powy??ej" />
                            </FormGroup>
                            <div className={"TwoElementContainer"}>
                                <Input className={"OneElementContainer"}
                                       type={"text"} placeholder={"imi?? i nazwisko"} value={names2}
                                       onChange={e => setNames2(e.target.value)}/>
                            </div>
                            <div className={"TwoElementContainer"}>
                                <Input className={"OneElementContainer"} placeholder={"kod pocztowy"} value={zipCode2}
                                       onChange={e => setZipCode2(e.target.value)}/>
                                <Input className={"OneElementContainer"} placeholder={"miejscowo????"}
                                       value={place2} onChange={e => setPlace2(e.target.value)}/>
                            </div>

                            <div className={"TwoElementContainer"}>
                                <Input className={"OneElementContainer"} placeholder={"ulica"} value={street2}
                                       onChange={e => setStreet2(e.target.value)}/>
                                <Input className={"OneElementContainer"} placeholder={"nr budynku"}
                                       value={number2} onChange={e => setNumber2(e.target.value)}/>
                                <Input className={"OneElementContainer"} placeholder={"nr mieszkania"}
                                       value={apartmentNumber2} onChange={e => setApartmentNumber2(e.target.value)}/>
                            </div>

                        </div>
                    }
                </div>

                <div className={"FormInput"}>
                    <div className={"CategoryName"}>Dane realizacji</div>
                    <div className={"InputContainer"}>

                            <Input style={{marginBottom:'10px', width:'50%'}} placeholder={"miejscowo???? podpisania umowy"}  value={placeOfSigning} onChange={e => setPlaceOfSignings(e.target.value)}/>

                        <div className={"CategoryName"}>Termin wykonania realizacji</div>
                        <div className={"TwoElementContainer"} style={{marginTop:'10px'}}>
                            <Input type="date"  placeholder={"data realizacji"} value={timeLimit} onChange={e=> setTimeLimit(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={"FormInput"}>
                    <div className={"CategoryName"}>Finanse</div>
                    <div className={"InputContainer"}>

                        <Input style={{marginBottom:'10px', width:'50%'}} placeholder={"kwota ca??kowita"} value={totalPrice} type={"number"} onChange={e=> setTotalPrice(e.target.value)}/>
                        <Input style={{marginBottom:'10px', width:'50%', marginTop:'20px'}} placeholder={"zaliczka"} value={advance} type={"number"} onChange={e=> setAdvance(e.target.value)}/>

                    </div>
                </div>

                <div className={"FormInput"}>
                    <div style={{flex:'1', display:'flex'}}>
                        <div className={"CategoryName"}>Produkty</div>
                        <div className={"AddElement"} onClick={handleClick}>
                            <img height={15} src={'https://cdn-icons-png.flaticon.com/512/1828/1828819.png'}/>
                            <p style={{marginLeft:'5px'}}>Dodaj</p>
                        </div>
                    </div>

                    <div className={"InputContainer"}>
                            <table>
                            <tbody>
                        {state.map(x => {
                            return (
                            <tr key={x.name}>
                                <td>{x.name}</td>
                                <td style={{width:'5%'}} onClick={() => handleSelectElement(x)}><img height={20} src={'https://cdn-icons-png.flaticon.com/512/2603/2603105.png'}/></td>
                            </tr>
                            )})}
                            </tbody>
                            </table>

                    </div>
                </div>



                <div className={'ButtonContainer'} onClick={() => handleEnablePopUp()}>
                    <h3 className={'ButtonGenerate'}>Generuj</h3>
                </div>

                <PDFContainer trigger={btnPopUp} setTrigger={setBtnPopUp} number2={number2} apartmentNumber2={apartmentNumber2} place2={place2} street2={street2} zipCode2={zipCode2} names2={names2} names={names} zipCode={zipCode} place={place} street={street} number={number} apartmentNumber={apartmentNumber} timeLimit={timeLimit} advance={advance} placeOfSigning={placeOfSigning} totalPrice={totalPrice} state={state} checked={checked}/>

            </div>
        </div>
    )
}


export default FormContainer;

