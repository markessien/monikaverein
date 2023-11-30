import GPS from "@/shared/icons/GPS";

type ListItemProps = {
  title: string;
  links: LinkProps[];
};

type LinkItemProps = { type: "link"; name: string; href: string };

type LocationItemProps = { type: "location"; country: string; address: string; phone: string };

export type LinkProps = LinkItemProps | LocationItemProps;

const ListItem = ({ title, links }: ListItemProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-title font-bold text-neutral-100 text-3xl mb-4">{title}</h3>

      {links.map((item, idx) => {
        if (item.type === "location") return <LocationItem key={item.address + idx} {...item} />;

        return (
          <a key={item.name + idx} className="font-title font-normal text-neutral-100 text-xl">
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

const LocationItem = ({ address, country, phone }: LocationItemProps) => {
  return (
    <div className="flex gap-2">
      <GPS className="text-gray-4 mt-1" />

      <div>
        <p className="text-xl font-title font-normal text-neutral-100 uppercase m-0 mb-1">{country}</p>
        <p className="text-xl font-text font-normal text-neutral-100 m-0">
          {address} <br /> {phone}
        </p>
      </div>
    </div>
  );
};

export default ListItem;
