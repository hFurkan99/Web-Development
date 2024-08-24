export default function App() {
  return (
    <div className="flex items-center min-h-screen bg-slate-600 justify-center">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:flex-row md:space-x-6 md:my-0">
        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Basic</div>
            <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
            <h3 className="text-center mt-2">$1.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="border border-violet-600 py-3 px-10 rounded-lg hover:bg-violet-800 hover:border-violet-800 my-6"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">100 GB of storage</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Option to add members</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-violet-600 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Standart</div>
            <h2 className="mt-10 font-serif text-5xl text-center">200GB</h2>
            <h3 className="text-center mt-2">$3.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="border border-violet-600 py-3 px-10 rounded-lg hover:bg-violet-800 hover:border-violet-800 my-6 bg-violet-600"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">200 GB of storage</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Option to add members</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">Premium</div>
            <h2 className="mt-10 font-serif text-5xl text-center">2TB</h2>
            <h3 className="text-center mt-2">$8.99/Month</h3>
            <div className="flex justify-center">
              <a
                className="border border-violet-600 py-3 px-10 rounded-lg hover:bg-violet-800 hover:border-violet-800 my-6"
                href="#"
              >
                Purchase
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700"></div>
          <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">2 TB of storage</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Option to add members</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="pi pi-check"></span>
                <span className="text-sm ml-1 ">Extra member benefits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
