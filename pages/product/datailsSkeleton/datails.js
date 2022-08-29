import { Skeleton } from "@mantine/core";

function Datails() {
    return (
        <div className="w-full h-auto w-5/6 m-auto rounded-md">

            <div className="flex flex-col">
                <Skeleton width={800} height={240} mb={3} mt={5}/>
                <Skeleton height={20} width="70%" mb={3} />
                <Skeleton height={40} width="95%" mb={3} />
                <Skeleton height={10} width="95%" mb={3} />
                <div className="flex flex-col-1">
                    <Skeleton height={40} width="45%" m={1} />
                    <Skeleton height={40} width="49%" m={1} />
                </div>
            </div>
        </div>
    );
}

export default Datails;
