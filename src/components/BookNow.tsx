import React from 'react'
import { colors } from '../data/constants';

const handleBotao = () => {
    return console.log("CLICASTE NO BOTAO");
  };

const BookNow = (props:any) => {
  return (
    <div>
        <div className=" active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center">
              <button
                className={`p-4 transition-all duration-300 border-solid border-4 border-transparent font-text active:translate-y-3 ${colors.bookNow} ${colors.bookNowGlow} ${colors.bookNowActive} ${colors.bookNowHover} tracking-tight`}>
                {props.name}
              </button>
            </div>
    </div>
  )
}

export default BookNow