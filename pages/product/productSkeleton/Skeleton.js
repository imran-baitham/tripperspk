import { Skeleton } from "@mantine/core";

function ProductSkeleton() {
    return (
        <div className="flex flex-col">
            <Skeleton width={350} height={240} mb={3} />
            <Skeleton height={20} width="80%" mb={3} />
            <Skeleton height={40} width="100%" mb={3} />
            <Skeleton height={10} width="100%" mb={3} />
            <div className="flex flex-col-1 justify-between">
                <Skeleton height={40} width="48%" m={1} />
                <Skeleton height={40} width="48%" m={1} />
            </div>
        </div>
    );
}

export default ProductSkeleton