"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
  id?: string;
  className?: string;
  blur?: string;
};

const LazyImage = ({ src, className = "", blur, id }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [mountLazy, setMountLazy] = useState(true);

  useEffect(() => {
    const el = divRef.current;
    const img = el?.querySelector("img");

    if (!el || !img) {
      setMountLazy(false);
      setOpacity(0);
      return;
    }

    setMountLazy(true);
    setOpacity(1);

    if (img.complete) handleLoad();
    else img.addEventListener("load", handleLoad);

    return () => {
      img?.removeEventListener("load", handleLoad);
    };

    // eslint-disable-next-line
  }, [divRef, src]);

  const handleLoad = () => {
    setOpacity(0);
    setTimeout(() => setMountLazy(false), 1000);
  };

  const lazyClassNames = `absolute left-0 top-0 w-full h-full transition-opacity duration-500 opacity-${opacity}`;

  return (
    <div ref={divRef} id={id} className={`relative ${className}`}>
      <img src={src} className="w-full h-full" style={{ opacity: opacity ? 0 : 1 }} loading="lazy" />

      {mountLazy && <div className={`${lazyClassNames} z-[1] skeleton rounded-none bg-transparent`}></div>}

      {mountLazy && <img src={blur} className={`blur-lg ${lazyClassNames}`} />}
    </div>
  );
};

export default LazyImage;
