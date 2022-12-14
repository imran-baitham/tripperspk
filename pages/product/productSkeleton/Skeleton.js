import { Skeleton } from "@mantine/core";

function ProductSkeleton() {
  return (
    <div className="flex flex-col">
      <Skeleton width={315} height={240} mb={3} />
      <Skeleton height={20} width="70%" mb={3} />
      <Skeleton height={40} width="95%" mb={3} />
      <Skeleton height={10} width="95%" mb={3} />
      <div className="flex flex-col-1">
        <Skeleton height={40} width="45%" m={1} />
        <Skeleton height={40} width="49%" m={1} />
      </div>
    </div>
  );
}

export default ProductSkeleton;
