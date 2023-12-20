"use client";

import styled from "@emotion/styled";
import LazyImage from "@/shared/components/LazyImage";

const GradImage = () => {
  return (
    <Wrapper
      className="rounded-full overflow-hidden"
      src="https://ik.imagekit.io/cocroooiz/philosophy/Our%20Vision.jpg?updatedAt=1703047286965"
      blur="https://ik.imagekit.io/cocroooiz/philosophy/tr:w-30,h-30/Our%20Vision.jpg?updatedAt=1703047286965"
    />
  );
};

const Wrapper = styled(LazyImage)`
  width: clamp(270px, 50vw, 538px);
  height: clamp(270px, 50vw, 538px);
`;

export default GradImage;
