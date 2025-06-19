const RecipeManager = () => {
  return (
    <div className='p-6 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Resept Meneceri</h1>

      <div className='mb-4 space-y-2'>
          <input type="text" 
            placeholder='Resept adi'
            className="border p-2 w-full"
          />

          <input type="text" 
          placeholder='Terkibler'
          className="border p-2 w-full" />

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Əlavə et
          </button>
      </div>

        <div className="mb-4 space-x-2">
        <button
          className='px-3 py-1 rounded border'
        >
          Hamisi
        </button>

        <button
        className='px-3 py-1 rounded border'  
        >
          Yalniz favoritlər
        </button>
      </div>

     
    </div>
  )
}

export default RecipeManager
