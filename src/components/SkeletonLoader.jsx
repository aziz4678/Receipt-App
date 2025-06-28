import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonLoader({ type = "default" }) {
  if (type === "recipe") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 xl:px-24 mt-6 animate-pulse">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-full">
            <Skeleton height={140} className="rounded-t-xl" />
            <Skeleton height={16} className="mt-3" />
            <Skeleton height={14} width="70%" className="mt-1" />
          </div>
        ))}
      </div>
    );
  }
}
