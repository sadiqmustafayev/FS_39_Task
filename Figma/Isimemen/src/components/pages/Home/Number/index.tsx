const Number = () => {
  return (
    <main className="py-16 px-4 justify-center flex flex-col">
      <h1 className="text-center text-4xl mb-12">The numbers say it all</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center">
        <div className="max-w-xs">
          <h2 className="text-5xl font-bold mb-2">300+</h2>
          <p className="text-lg">Clients served</p>
        </div>

        <span className="md:inline text-4xl">|</span>

        <div className="max-w-xs">
          <h2 className="text-5xl font-bold mb-2">7k+</h2>
          <p className="text-lg">
            Women trained in career growth strategies
          </p>
        </div>

        <span className="md:inline text-4xl">|</span>

        <div className="max-w-xs">
          <h2 className="text-5xl font-bold mb-2">$2mil+</h2>
          <p className="text-xl max-w-3/4">
            In salary increases during a pandemic
          </p>
        </div>
      </div>

      <div className="bg-linen mt-20 px-2 py-14">
        <h1 className="text-7xl flex justify-between  w-full whitespace-nowrap">
          He is calling. It’s time to make a move. Y
        </h1>
      </div>
    </main>
  );
};

export default Number;
