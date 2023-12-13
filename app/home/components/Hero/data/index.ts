import useSWRImmutable from "swr/immutable";

type DataType = { current: number; forward: boolean };

export const useCarouselPos = () => {
  // Note: value is zero-based
  const resp = useSWRImmutable<DataType>("carousel-pos", { fallbackData: { current: -1, forward: true } });

  const setPos = () => {
    let id: any = null;

    return (current: number, forward: boolean) => {
      if (id) clearTimeout(id);

      id = setTimeout(() => resp.mutate({ current, forward }), 1000);
    };
  };

  return [resp.data!, setPos()] as [DataType, (current: number, forward: boolean) => void];
};
