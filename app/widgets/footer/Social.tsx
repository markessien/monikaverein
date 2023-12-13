import { ReactNode } from "react";

const Social = ({ icon }: { icon: ReactNode; href?: string }) => {
  return (
    <div className="w-[30px] h-[30px] p-1 [&>svg]:h-full [&>svg]:w-full rounded-full bg-secondary-600 text-neutral-100 flex items-center justify-center">
      {icon}
    </div>
  );
};

export default Social;
