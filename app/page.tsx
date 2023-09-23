import Image from 'next/image'

async function fetchData() {
  try {
    const response = await fetch("https://apis-oeitbbnhn-abubakar528.vercel.app/constant.json");
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
  const data = await fetchData();
  console.log({ data })


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
    Team Netixsol
  </h1>
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-4">
    {data.map((val: any) => (
      <div className="flex flex-col items-center border border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2">{val.name}</h1>
        <img src={`${val.img}`} alt="Profile not found" className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-64 xl:w-64 rounded-md" />
        <h3 className="mt-2 text-[16px] ">{val.post}</h3>
      </div>
    ))}
  </div>
</main>

  )
}
