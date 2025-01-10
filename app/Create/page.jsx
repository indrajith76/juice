import Link from "next/link";
import React from "react";

const Create = () => {
  return (
    <>
      <div className="text-white my-10 md:my-16">
        <div className="border bg-[#0000007e] rounded-[6px] w-full md:w-[479px] 2xl:w-[800px] mx-auto px-4 2xl:px-6 py-3 2xl:py-5">
          <div className="flex items-center gap-[6px]">
            <img
              className="w-[14px] 2xl:w-[20px]"
              src="/images/Star.png"
              alt=""
            />
            <p className="text-xs 2xl:text-xl text-white">
              Embark on a <span className="text-[#03F0FF]">new journey...</span>
            </p>
          </div>

          <p className="my-3 text-[13px] 2xl:text-xl">
            <img
              className="inline h-4 2xl:h-6"
              src="/images/juice.png"
              alt=""
            />{" "}
            allows anyone to create a new token and spin up a decentralized
            reserve currency, or “dao”.
          </p>

          <p className="text-[13px] 2xl:text-xl mb-[10px] 2xl:mb-5">
            Cost: 0.01 eth (+gas & deployment fees)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 2xl:gap-y-6 gap-x-10 mb-9">
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                name
              </label>
              <input
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                twitter link (optional)
              </label>
              <input
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                ticker
              </label>
              <input
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                telegram link (optional)
              </label>
              <input
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                description
              </label>
              <textarea
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                website link (optional)
              </label>
              <input
                type="text"
                className="w-full md:w-[181px] 2xl:w-full block border rounded bg-[#ffffff11] px-3 py-0 2xl:py-1 text-lg 2xl:text-2xl"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-[11px] 2xl:text-lg" htmlFor="name">
                token logo (png - 500x500px)
              </label>
              <input
                type="image"
                className="block rounded h-auto 2xl:h-7"
                name=""
                id=""
                src="/images/imgInp.png"
              />
            </div>
          </div>
          <p className="text-xs 2xl:text-xl mb-5">
            Once these parameters are filled, press “launch”.
          </p>
          <p className="text-xs 2xl:text-xl mb-9">
            Your coin will then be{" "}
            <span className="text-[#03F0FF]">launched on Ethereum</span>, and
            you can then setup your{" "}
            <Link href="/Vault" className="text-[#03F0FF]">
              vault settings.
            </Link>
          </p>
          <div className="mb-10 flex flex-col justify-center">
            <button className="text-xl 2xl:text-3xl">[ launch ]</button>
            <p className="text-xs 2xl:text-xl text-center">
              Cost: 0.01 eth (+gas & deployment fees)
            </p>
          </div>
        </div>
      </div>
      
      {/* Notification */}
      <div className="text-white absolute bottom-[-60%] pb-10 right-5">
        <div className="border bg-[#0000007e] rounded-[6px] w-[280px] h-[48px] p-[10px] py-[8px] mb-[13px] relative">
          <p className="text-[12px]">Transaction submitted...</p>
          <Link
            className="text-[8px] text-[#989898] underline block"
            href={"/"}
          >
            view txn
          </Link>
          <button className="absolute top-[6px] right-[6px]">
            <img src="/images/icons-close.png" alt="" />
          </button>
        </div>
        <div className="border bg-[#0000007e] rounded-[6px] w-[280px] h-[48px] p-[10px] py-[8px] mb-[13px] relative">
          <p className="text-[12px] text-red-500">Transaction failed.</p>
          <Link
            className="text-[8px] text-[#989898] underline block"
            href={"/"}
          >
            view txn
          </Link>
          <button className="absolute top-[6px] right-[6px]">
            <img src="/images/icons-close.png" alt="" />
          </button>
        </div>
        <div className="border bg-[#0000007e] rounded-[6px] w-[280px] h-[48px] p-[10px] py-[8px] mb-[13px] relative">
          <p className="text-[12px]"><span className="text-[#03F0FF]">You created</span> “PEPE” 🎉</p>
          <Link
            className="text-[8px] text-[#989898] underline block"
            href={"/"}
          >
            view txn
          </Link>
          <button className="absolute top-[6px] right-[6px]">
            <img src="/images/icons-close.png" alt="" />
          </button>
        </div>
        <div className="border bg-[#0000007e] rounded-[6px] w-[280px] h-[48px] p-[10px] py-[8px] mb-[13px] relative">
          <p className="text-[12px]">“PEPE” is now <span className="text-[#64FF4A]">live!</span> ✅</p>
          <Link
            className="text-[8px] text-[#989898] underline block"
            href={"/"}
          >
            view txn
          </Link>
          <button className="absolute top-[6px] right-[6px]">
            <img src="/images/icons-close.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
