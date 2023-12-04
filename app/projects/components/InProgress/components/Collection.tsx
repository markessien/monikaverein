import Item, { ItemProps } from "./Item";

type Props = { title: string; text: string; list: ItemProps[] };

const Collection = ({ title, text, list }: Props) => {
  return (
    <div className="grid gap-4">
      <h3 className="font-bold font-title mb-4 text-4xl text-center sm:text-2xl">{title}</h3>

      <p className="font-text text-xl font-normal text-black sm:text-base mb-8">{text}</p>

      <div className="flex flex-col gap-10">
        {list.map((item, idx) => (
          <Item key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
