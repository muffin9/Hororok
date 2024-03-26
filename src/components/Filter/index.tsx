import Text from "@/components/common/Text";
import Icon from "@/components/common/Icon";
import SubmitButton from "./SubmitButton";
import Button from "@/components/common/Button";
import Condition from "@/components/Condition";

interface FilterProps {
  onCloseButton: () => void;
}

const Filter = ({ onCloseButton }: FilterProps) => {
  return (
    <section className="w-[390px] h-1/2 z-[1000] bg-white fixed bottom-0 rounded-tr-2xl rounded-tl-2xl boxShadow-xl overflow-scroll">
      <header>
        <div className="flex justify-between px-4 my-6">
          <Text size="large" weight="medium" className="text-black">
            카페 필터
          </Text>
          <button onClick={onCloseButton}>
            <Icon type="close" alt="close" />
          </button>
        </div>
      </header>
      <Condition />
      <div className="flex h-[50px]">
        <Button size="large" className="w-1/3 bg-white flex gap-[2px]">
          <Icon size="small" type="refresh" alt="재설정" />
          <Text size="medium" className="text-black">
            재설정
          </Text>
        </Button>
        <SubmitButton onCloseButton={onCloseButton} />
      </div>
    </section>
  );
};

export default Filter;
