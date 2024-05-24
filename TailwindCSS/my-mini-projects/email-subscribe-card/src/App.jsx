import img from "../src/assets/images/image.jpg";
export default function App() {
  return (
    <div className="flex justify-center h-screen items-center bg-zinc-700">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <img
            src={img}
            alt=""
            className="h-80 rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 hover:rounded-xl duration-300"
          />
          <div className="p-6 md:p-5">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs test-xs leading-5 tracking-wide text-center text-white md:text-left my-4">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter
            </p>
            <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-text-center md:text-left placeholder:md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-zinc-800 bg-lime-500 rounded-md hover:bg-lime-700 hover:text-white duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
