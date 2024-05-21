import references from "../../datas/references.js";
import ReferenceItem from "./ReferenceItem";

export default function ReferencesPage() {
  return (
    <div>
      <div className="mb-8 mt-8 md:mb-16 md:mt-16 px-1">
        <h2 className="text-gray-500 font-semibold text-[36px] md:text-[44px] text-center">
          Bazı Referanslarımız
        </h2>
        <p className="text-center text-[18px] md:text-[24px] text-gray-400 font-medium">
          Bizi tercih edenlerden biri de siz olmak ister misiniz?
        </p>
      </div>

      <ul className="md:grid md:grid-cols-2">
        {references.map((item) => (
          <li key={item.id}>
            <ReferenceItem
              name={item.name}
              description={item.description}
              logo={item.logo}
              id={item.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
