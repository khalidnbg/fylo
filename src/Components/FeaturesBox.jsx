function FeaturesBox({ items }) {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/src/assets/images/${items.icon}`}
        className="w-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{items.title}</h4>
      <p className="font-normal text-sm">{items.desc}</p>
    </div>
  );
}

export default FeaturesBox;
