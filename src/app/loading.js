import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[325px] w-[650px] rounded-xl  bg-orange-200" />
        <div className="space-y-2 ">
          <Skeleton className="h-4 w-[650px]  bg-orange-200" />
          <Skeleton className="h-4 w-[650px]  bg-orange-200" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
