import React from 'react'

const handleBotao = () => {
    return console.log("CLICASTE NO BOTAO");
  };

const BookNow = (props:any) => {
  return (
    <div>
        <a className=" active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center">
              <button
                className="bg-primary p-4  hover:bg-background hover:text-white transition-all duration-300 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-text active:translate-y-3 drop-shadow-[0px_0px_5px_rgba(255,208,0,0.35)] hover:drop-shadow-[0px_0px_12px_rgba(255,208,0,0.35)]  tracking-tight text-black
                active:drop-shadow-[0px_0px_6px_rgba(255,208,0,0.35)]">
                {props.name}
              </button>
            </a>
    </div>
  )
}

export default BookNow