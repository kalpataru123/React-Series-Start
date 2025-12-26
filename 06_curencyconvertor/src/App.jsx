import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './components'
import useCuernecyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [From,setFrom] = useState("usd")
  const [To,setTo] = useState("inr")
  const [ConvertAmount,setConvertAmount] = useState(0)

  const currencyInfo = useCuernecyinfo(From)
  const options = Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(To)
    setTo(From)
    setConvertAmount(amount)
    setAmount(ConvertAmount)
  }
  const convert = ()=>{
    setConvertAmount(amount*currencyInfo[To])
  }

  return (
        <div
            className=" w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1696733585001-868eb49cbfa6?auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          convert() 
                        }}
                    >
                        <div className="w-full mb-1 text-black">
                            <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options} 
                              onCurrencyChange={(currency)=>
                                setFrom(currency)
                              }
                              onAmountChange={(amount)=>
                                setAmount(amount)
                              }
                              selectCurrency={From}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}  
                            >
                              swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4 text-black">
                            <InputBox
                              label="To"
                              amount={ConvertAmount}
                              currencyOptions={options}  
                              onCurrencyChange={(curency)=>
                                setTo(curency)
                              }
                              selectCurrency={To}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {From.toUpperCase()} to {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
