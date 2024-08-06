"use client";

import Icon from "../Icon";
import Text from "../Text";
import Button from "../Button";

interface ModalProps {
  title: string;
  subTitle?: string;
  okButtonText: string;
  okCallbackFunc: () => void;
  cancelButtonText?: string;
  cancelCallbackFunc?: () => void;
}

const Modal = ({
  title,
  subTitle,
  okButtonText,
  cancelButtonText,
  okCallbackFunc,
  cancelCallbackFunc,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-[1000]">
      <div className="w-[358px] p-4 rounded-md bg-white relative">
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={cancelCallbackFunc}
          >
            <Icon type="close" size="small" alt="close" />
          </button>
        </div>
        <div className="pt-4 text-center">
          <Text size="xLarge" className="text-black whitespace-pre-wrap">
            {title}
          </Text>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500 whitespace-pre-wrap">
              {subTitle}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Button size="full" onClick={okCallbackFunc}>
            <Text size="large">{okButtonText}</Text>
          </Button>
          {cancelButtonText && (
            <Button
              size="full"
              bgColor="bg-gray-300"
              onClick={cancelCallbackFunc}
            >
              <Text size="large" className="text-gray-700">
                {cancelButtonText}
              </Text>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
