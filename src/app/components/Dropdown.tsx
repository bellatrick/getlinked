/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown({
  list,
  selected,
  placeholder,
  onChange,
  hideLabel,
  noBorder
}: any) {
  return (
    <Listbox
      value={selected}
      onChange={(selected) => onChange(selected)}
      data-testid="dropdown"
    >
      <div className="capitalize">
        {" "}
      
        <div className="mt-1 relative">
          <Listbox.Button className={` relative w-full  border-gray-300 border darkbg rounded-[4px] shadow-sm pl-3 pr-10 py-[10px] text-left cursor-default focus:outline-none focus:ring-1 focus:ring-themepink focus:border-themepurple sm:text-sm`}>
            <span
              className={`block capitalize truncate ${
                hideLabel ? "text-gray-200 font-semibold" : "text-white"
              }`}
            >
              {selected?.name
                ? selected?.name
                : selected?.title
                ? selected?.title
                : placeholder}
            </span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-[50] mt-1 w-full bg-[#110b22] shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {list ? (
                list?.map((option: any, i: number) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white darkbg" : "text-gray-200",
                        "cursor-default select-none relative py-3 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <Fragment>
                        <span
                        title={option?.title ? option?.title : option.name}
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option?.title ? option?.title : option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-themepurple",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </Fragment>
                    )}
                  </Listbox.Option>
                ))
              ) : (
                <p className="text-center font-bold">Loading</p>
              )}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
}
