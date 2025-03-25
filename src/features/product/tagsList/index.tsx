import { useState } from "react";

const tagsArray = [
  { name: "Худи", tagId: 1 },
  { name: "Свитшоты", tagId: 2 },
  { name: "Оверсайз", tagId: 3 },
  { name: "С капюшоном", tagId: 4 },
  { name: "Удлиненные", tagId: 1 },
  { name: "Свободного кроя", tagId: 2 },
  { name: "Со стразами", tagId: 3 },
  { name: "Из неопрена", tagId: 4 },
  { name: "С воротником", tagId: 5 },
  { name: "Без воротника", tagId: 6 },
];

function TagsList() {
  const [showTags, setShowTags] = useState(false);
  return (
    <div className="flex justify-start gap-[12px] items-center">
      <div className="flex flex-wrap gap-x-[7px] gap-y-2 text-[12px] leading-[14.63px] ">
        {showTags
          ? tagsArray.map((obj, i) => (
              <button
                key={i + 200}
                className="p-[9px] border border-black2 text-center"
              >
                {obj.name}
              </button>
            ))
          : tagsArray.slice(0, 8).map((obj, i) => (
              <button
                key={i + 100}
                className="p-[9px] border border-black2 text-center"
              >
                {obj.name}
              </button>
            ))}
      </div>
      {!showTags && (
        <div className=" text-gc1 text-[12px] leading-[14.63px] ">
          <button onClick={() => setShowTags(true)} className="underline">
            показать все
          </button>
        </div>
      )}
    </div>
  );
}

export default TagsList;
