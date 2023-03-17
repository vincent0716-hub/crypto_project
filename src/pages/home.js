import React,{useEffect} from 'react'
import crypto1 from '../components/crypto1.png'
import crypto2 from '../components/crypto2.png'
const home = (props) => {

  console.log("pass value crypto", props)//get api json dada successfully
  
  const crypto4data =[
    props.post[0],
    props.post[1],
    props.post[2],
    props.post[3],]

  console.log(" crypto4data: ", crypto4data );
  console.log(" crypto4data 0 : ", crypto4data[0] );
  console.log(" crypto4data 1 : ", crypto4data[1] );
  const caculation =(number)=>{

    number = number.toFixed(2);
    return number
  }
  return (
    <section className='bg-gradient-to-t from-[#0f051d] to-[#130749] w-full h-[100vh] '>
      <div className='container_home w-[100%] absolute'>
        <div className=' relative items-center top-52 '>
          {/**<img src={crypto1} className='animate-bounce w-[10%] h-[10%]'></img> 
          
          <img src={crypto2} className='animate-bounce w-[10%] h-[10%]'></img> */}
          <img src={crypto1} className='max-[750px]:hidden animate-bounce absolute w-[8%] left-24'></img>
          <h1 className='text-white text-[105px] font-Grotesk m-0 p-0 min-[375px]:px-[10%] min-[375px]:text-5xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl '>
            TRACK AND TRADE
            <br></br><span className='bg-clip-text bg-gradient-to-tr from-[#2600fc] to-[#ff00ea] text-transparent transition-all'> CRYPTO CURRENCIES</span>
          </h1>
          <img src={crypto2} className='max-[750px]:hidden animate-bounce absolute right-24 w-[8%] top-0'></img>
        </div>

        <div className='max-[600px]:hidden max-[750px]:gap-[50%] max-[750px]:px-48 max-w-5xl mt-72 px-12 mx-auto  items-center justify-between text-white  flex max-[750px]:grid max-[750px]:grid-cols-2'>
         
         {
          crypto4data.map(CryptoSource =>
            <a className='w-[10%] max-[750px]:w-[100%] font-Grotesk items-center justify-center'>
            <img src={CryptoSource.image} className=' m-0 p-0 '></img>
            <p>
              {CryptoSource.name}
              <span className={CryptoSource.market_cap_change_percentage_24h> 0 ? "text-[#09e509] p-2" : "text-[red] p-2"}
                >

                {caculation(CryptoSource.market_cap_change_percentage_24h)}%
              </span><br></br>
              ${CryptoSource.current_price}
            </p>

          </a>
          )
         }{/*
          <a className='w-[10%] max-[750px]:w-[100%] font-Grotesk'>
            <img src={props.post[0].image} className=' m-0 p-0 '></img>
            <p>
              {props.post[0].name}
              <span className={
                'p-2 '}>

                {props.post[0].market_cap_change_percentage_24h}
              </span><br></br>
              ${props.post[0].current_price}
            </p>

          </a>
          <a className='w-[10%] max-[750px]:w-[100%]'>

            <img src={props.post[0].image}></img>
            <p>
              {props.post[0].name}
              <span>

                {props.post[0].market_cap_change_percentage_24h}
              </span><br></br>
              {props.post[0].current_price}
            </p>
          </a>

          <a className='w-[10%] max-[750px]:w-[100%]'>
            <img src={props.post[0].image} className=' m-0 p-0 '></img>
            <p>
              {props.post[0].name}
              <span>
                {props.post[0].market_cap_change_percentage_24h}
              </span><br></br>
              {props.post[0].current_price}
            </p>

          </a>

          <a className='w-[10%] max-[750px]:w-[100%]'>
            <img src={props.post[0].image} className=' m-0 p-0 '></img>
            <p>
              {props.post[0].name}
              <span>
                {props.post[0].market_cap_change_percentage_24h}
              </span><br></br>
              {props.post[0].current_price}
            </p>

          </a> */}


        </div>
      </div>
    </section>
  )
}

export default home