"use client";

import styled from "@emotion/styled";
import LazyImage from "@/shared/components/LazyImage";

const GradImage = () => {
  return (
    <Wrapper
      className="rounded-full overflow-hidden"
      src="https://ik.imagekit.io/cocroooiz/frontend/our_vission.jpeg?updatedAt=1701681027902"
      blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-30,h-30/our_vission.jpeg?updatedAt=1701681027902"
    />
  );
};

const Wrapper = styled(LazyImage)`
  width: clamp(270px, 50vw, 538px);
  height: clamp(270px, 50vw, 538px);
`;

export default GradImage;
