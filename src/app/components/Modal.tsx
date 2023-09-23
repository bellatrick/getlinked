import { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import Image from "next/image";
type props = {
  open: boolean;
  setOpen:()=>void;
  title: string;
  details: string;
};
export default function Modal({ open, setOpen, title, details }: props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed text-white bg-body bg-opacity-[0.85] transition-opacity inset-0 z-[100] overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform z-[1000] overflow-y-auto rounded-md  pb-4 shadow-xl transition-all w-full px-[80px] sm:px-6 sm:max-w-[620px]">
                <div className=" relative px-[50px] darkbg pb-8 rounded-[5px]  flex flex-col justify-center py-4 border border-themepurple">
                  <Image
                    src="/images/purplestar.png"
                    alt="Sample Image"
                    width={20}
                    height={20}
                    className="absolute object-contain w-[14px]  lg:w-[20px] right-[-24px] top-[3px]"
                  />
                  <Image
                    src="/images/gray_star.png"
                    alt="Sample Image"
                    width={20}
                    height={20}
                    className="absolute opacity-50 object-contain w-[14px]  lg:w-[20px] left-[70px] top-[150px] "
                  />
                  <Image
                    src="/images/pinkstar.png"
                    alt="Sample Image"
                    width={20}
                    height={20}
                    className="absolute  object-contain w-[10px]  lg:w-[14px] right-[12px] bottom-[12px] "
                  />
                  <div className="flex  ">
                    <Image
                      src="/images/yay.png"
                      alt="Sample Image"
                      width={300}
                      height={300}
                      className=" object-cover self-center mx-auto "
                    />
                  </div>
                  <p className="md:text-[22px] text-[16px] font-[600] text-center text-white">
                    {title}
                  </p>
                  <p className="my-2 text-[12px] md:text-[14px] text-center">
                    {details}
                  </p>
                  <div className="my-6" onClick={ setOpen}>
                    <Button className="w-full" text="Back" />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
