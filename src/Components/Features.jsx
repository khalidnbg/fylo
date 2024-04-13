import { useState } from "react";
import FeaturesBox from "./FeaturesBox";

function Features() {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhere",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      icon: "icon-any-file.svg",
      title: "Real-time collaboration",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      icon: "icon-security.svg",
      title: "Store any type of file",
      desc: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
    },
  ]);

  return (
    <section className="pb-[150px]">
      <div className="container">
        <div
          className="grid grid-cols-1 w-[865px] mx-auto max-w-full
                     md:grid-cols-2 gap-[100px]">
          {items.map((item) => (
            <FeaturesBox
              // key={item.title}
              // title={item.title}
              // icon={item.icon}
              // desc={item.desc}
              items={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
