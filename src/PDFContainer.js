import {useLocation, useNavigate, Link} from "react-router-dom";
import {useReactToPrint} from 'react-to-print';
import {useRef} from "react";



const PDFContainer = (props) => {

    const date = new Date().toLocaleDateString()
    const {names, zipCode, place, street, number, apartmentNumber, timeLimit,totalPrice ,advance, placeOfSigning, state, checked, zipCode2, place2, street2, number2, apartmentNumber2, totalPriceInWords, advanceInWords} = props
    const componentRef = useRef()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle:'MebleByKris',
    })


    return (props.trigger) ?
        <div className={'popupContainer'}>
            <div className={"popup"}>
                <div className={"popup-inner"}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/594/594864.png'} height={18}
                         className={'close-bnt'} onClick={() => props.setTrigger(false)}/>

                    <div className={"popUpContainer"}>
                        <div className={'PrintAndBackContainer'}>
                            <div className={'ButtonTopPDF'} onClick={() => props.setTrigger(false)}><p>Wróć</p></div>
                            <div className={'ButtonTopPDF'} onClick={handlePrint}><p>Drukuj</p></div>
                        </div>

                        <div className={'PDFContainer'} ref={componentRef}>
                            <div style={{
                                flex: '1',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                // marginBottom: '50px'
                            }}>
                                <img src={'https://meblebykris.pl/wp-content/uploads/2019/08/znakWodny.png'}
                                     height={40}/>
                            </div>

                            <p className={'PDFTitle'}>UMOWA NA WYKONANIE MEBLI</p>
                            <div className={'PDFText'}>
                                <p>Zawarta w miejscowości {place} dnia {date}r.</p>
                                <p>Pomiędzy: <br/> {names} zamieszkałym w {zipCode} {place},
                                    ul.{street} {number} {apartmentNumber === "" ? null :
                                        <p style={{display: 'inline-block'}}>/ {apartmentNumber}</p>}, <br/> zwanym
                                    dalej ZAMAWIAJĄCYM, <br/> a <br/> Krzysztofem Kurpierz,
                                    właścicelem firmy Meble by Kris Krzysztof Kurpierz przy ul. Strzelecka 21 w
                                    Przysieczy NIP: 9910401835, zwanym dalej WYKONAWCĄ.
                                </p>
                            </div>
                            <div className={'PDFText'}>
                                <p className={'sign§'}>§1</p>
                                <p>Zamawiający zamawia, w Wykonawca zobowiązauje sie do wykonania usługi w postaci:
                                    wykonania, transportu oraz montażu wymienonych poniżej elementów na wymiar:</p>

                                <table className={'TableStyle'}>
                                    {state.map(x => {
                                        return (

                                            <tr>
                                                <td>{x.name}</td>
                                            </tr>

                                        )
                                    })}
                                </table>

                            </div>
                            <div className={'PDFText'}>
                                <p>Strony ustalają <b>termin</b> wykonania dzieła na: {timeLimit}r.</p>
                            </div>
                            <div className={'PDFText'}>
                                <p style={{fontWeight:'bold'}}>Adres dostawy i montażu</p>

                                {checked === true ?
                                    <p>{zipCode} {place} <br/>ul. {street} {number} {apartmentNumber === "" ? null :
                                        <p style={{display: 'inline-block'}}>/ {apartmentNumber}</p>}</p>
                                    :
                                    <p>{zipCode2} {place2}
                                        <br/>ul. {street2} {number2} {apartmentNumber2 === "" ? null :
                                            <p style={{display: 'inline-block'}}>/ {apartmentNumber2}</p>}</p>
                                }

                            </div>
                            <div className={'PDFText'}>
                                <p className={'sign§'}>§2</p>
                                <p>Za wykonanie usługi ustawiają wynagrodzenie w wysokości: <br/> <b> {totalPrice} zł
                                    brutto (słownie: {totalPriceInWords} złotych brutto)</b></p>
                            </div>
                            <div className={'PDFText'}>
                                <p>W dniu podpisania umowy Zamawiający wpłącił Wykonawcy zaliczke w
                                    wysokości: <b>{advance} zł brutto (słownie: {advanceInWords} zł brutto)</b></p>
                                <p>Na rachunek mBank <b>55114020040000320276109193</b> (termin wpłaty 7 dni)</p>
                                <p> Pozostałą część wynagordzenia Zamawiający zapłaci gotówką przy odbiorze dzieła.</p>
                            </div>
                            <div className={'PDFText'}>
                                <p className={'sign§'}>§3</p>
                                <p>Umowa została sporządzona w dwóch jednobrzmiących egzemplarzach, po jednym dla każdej
                                    ze stron.</p>
                            </div>

                            <div className={'SignatureContainer'}>
                                <div className={'SignatureContainerSingleElement'}>
                                    <p style={{textAlign: 'center'}}>.................................. <br/> ZAMAWIAJĄCY
                                    </p>
                                </div>
                                <div className={'SignatureContainerSingleElement'}>
                                    <p style={{textAlign: 'center'}}>.................................. <br/> WYKONAWCA
                                    </p>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

        : ""
}


export default PDFContainer;
