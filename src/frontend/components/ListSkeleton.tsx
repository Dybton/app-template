import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ListSkeleton = ({ count = 11 }) => {
  const widthOptions = [
    "w-3/4",
    "w-1/2",
    "w-1/3",
    "w-5/6",
    "w-4/5",
    "w-2/3",
    "w-3/5",
    "w-4/6",
    "w-7/12",
    "w-2/3",
  ];

  const lines = Array.from({ length: count }, (_, index) => ({
    width: widthOptions[index % widthOptions.length],
  }));

  return (
    <div className='space-y-6'>
      <div className='space-y-4'>
        {lines.map((line, index) => (
          <Skeleton key={index} className={`h-4 ${line.width}`} />
        ))}
      </div>
    </div>
  );
};

export default ListSkeleton;
