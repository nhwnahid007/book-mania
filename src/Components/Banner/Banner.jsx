const Banner = () => {
  return (
    <div className="hero rounded-2xl h-[600px]  bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/c8BsC4G/pngwing-1.png" className="max-w-sm h-64 rounded-lg " />
    <div className="w-1/2">
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-6"></p>
      <button className="btn text-white rounded-lg bg-green-500">View The List</button>
    </div>
  </div>
</div>
  );
};

export default Banner;
