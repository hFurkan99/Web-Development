import referenceBg from "../../assets/referenceBackGround.png";
const blueBg = [1, 4, 5, 8, 9, 12, 13];

export default function ReferenceItem({ id, name, description, logo }) {
  let style = "";
  console.log(id);
  if (blueBg.includes(id)) style = " md:bg-referencesBg";
  else style = "md:bg-white";

  return (
    <div className={`${style} border-2 border-referencesBg md:border-none`}>
      <div className="py-[20px] flex gap-[10px] lg:gap-[10px] xl:gap-[50px]  items-center place-content-center px-3">
        <div className="h-min relative">
          <img
            className="border border-referenceImgBorder rounded-xl "
            src={referenceBg}
            alt="referenceBg"
          />
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto px-1 sm:px-0 h-3/4 xl:h-auto xl:w-auto md:w-3/4 md:h-3/5 sm:h-auto sm:w-auto"
            src={logo}
            alt={name + " logo"}
          />
        </div>
        <div className="w-[300px] sm:w-[400px] md:w-[240px] lg:w-[350px] xl:w-[350px] 2xl:w-[500px] lg:py-5 h-auto">
          <h5 className=" text-gray-700 font-semibold text-center text-[20px] md:text-[26px] lg:text-[30px] xl:text-[34px] sm:text-[24px]">
            {name}
          </h5>
          <p className=" text-gray-600 text-[13px] md:text-[16px] lg:text-[20px] xl:text-[24px] align-top h-auto sm:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
