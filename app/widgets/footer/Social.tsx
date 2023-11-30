import { ReactNode } from "react";

const Social = ({ icon }: { icon: ReactNode; href?: string }) => {
  return (
    <div className="w-[48px] h-[48px] rounded-full bg-secondary-600 text-neutral-100 flex items-center justify-center">
      {icon}
    </div>
  );
};

export default Social;
