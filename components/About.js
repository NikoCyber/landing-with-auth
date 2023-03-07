export default function About() {
  return (
    <div name="about" className="w-full my-32">
      <div className="mx-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl text-gray-500 py-6">
            Our services known around the globe by developer communities.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">100%</p>
            <p className=" text-xl text-gray-400 mt-2">Competition</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">24/7</p>
            <p className=" text-xl text-gray-400 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">100k</p>
            <p className="text-xl text-gray-400 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}
