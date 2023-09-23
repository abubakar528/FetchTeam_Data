import Image from 'next/image'

async function fetchData() {
  try {
    const response = await fetch("https://apis-6d99nk5uz-abubakar528.vercel.app/constant.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();

    return data;
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


export default async function Home() {
   const data =await fetchData();
   console.log({data})

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
          <h1 className='font-bold text-lg'>
          Team Netixsol
            </h1> &nbsp;
      <div className='flex flex-row w-["400px"] items-center justify-center gap-[30px] p-5 '>
          {data.map((val:any)=>{
           return (
           <>
           <div className='flex items-center justify-center flex-col'>

           <h1 className='font-lg font-bold mb-2'>{val.name}</h1>
           <img src={`${val.img}`} alt='Profile not find' height={100} width={100}/>
           <h1 className='mt-2'>{val.post}</h1>
           </div>
           </>
           
           )
          })}
          </div>
    </main>
  )
}
