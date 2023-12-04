"use client";

import LazyImage from "@/shared/components/LazyImage";
import PageLayer from "@/shared/components/PageLayer";
import styled from "@emotion/styled";

const Hero = () => {
  return (
    <StyledLayer className="!p-0">
      <LazyImage
        className="w-full h-full"
        src="https://ik.imagekit.io/cocroooiz/frontend/hero-1.png?updatedAt=1701210478670"
        blur="https://ik.imagekit.io/cocroooiz/frontend/tr:w-50,h-50/hero-1.png?updatedAt=1701210478670"
      />
    </StyledLayer>
  );
};

const StyledLayer = styled(PageLayer)`
  height: clamp(260px, 100%, 602px);
`;

export default Hero;
