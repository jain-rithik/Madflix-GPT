import React from "react";

const Shimmer = () => {
  return (
    <div className="px-6 py-5">
      {Array(5)
        .fill("")
        .map((el, idx) => {
          return (
            <div key={"shim" + idx} className="mb-8">
              <h1 className="my-4 h-7 bg-neutral-400/50 animate-pulse w-[60%] sm:w-40% md:w-[33%] rounded-lg"></h1>
              <div className="flex gap-5 overflow-x-scroll mb-1">
                {Array(Math.floor(Math.random() * 8) + 1)
                  .fill("")
                  .map((el, idx) => {
                    return (
                      <div key={"ShimCard" + idx} className="mb-1">
                        <div className="flex flex-col bg-gray-500 w-44 h-64 animate-pulse rounded-xl p-4 gap-4">
                          <div className="bg-neutral-400/50 w-full h-56 animate-pulse rounded-md"></div>
                          {/* <div className="flex flex-col gap-2">
                            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                          </div> */}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
