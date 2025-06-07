import { twMerge } from "tailwind-merge";
import { Techicon } from "./techicon"
import { Fragment } from "react";

export const Toolboxitems = ({items, className,itemsWrapperClassName}:{
  items: Array<{
    title: string;
    icontype: React.ElementType;
  }>;
  itemsWrapperClassName?: string;
  className?: string;
}) => {

  return (
            <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",className)}>
              <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemsWrapperClassName)}>
                {[...new Array(2)].fill(0).map((_,index)=>(
                  <Fragment>
                    {items.map((item: { title: string; icontype: React.ElementType }) => (
                <div key={item.title }className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <Techicon component={item.icontype} />
                    <span className="font-semibold">{item.title}</span>
                </div>
              ))} 
                  </Fragment>
                ))}
              
              </div>
            </div>
  )
}


