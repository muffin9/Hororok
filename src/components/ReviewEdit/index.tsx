"use client";

import Image from "next/image";
import Icon from "@/components/common/Icon";
import Text from "@/components/common/Text";
import Condition from "@/components/Condition";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import { useRouter } from "next/navigation";
import Modal from "../common/Modal";
import useKeyword from "@/Hooks/Keyword/useKeyword";
import useModal from "@/Hooks/useModal";
import { useEffect, useState } from "react";
import { reviewFilterDatas } from "@/app/constants";
import useReviewMutation from "@/Hooks/Api/myPage/useReviewMutation";
import { ReviewInfoType } from "@/interfaces/Review";
import { convertRequestKeywords } from "@/utils";

interface ReviewEditProps {
  reviewId: string;
  reviewData: ReviewInfoType;
}

type reviewImageType = {
  id: number;
  imageUrl: string;
};

const ReviewEdit = ({ reviewId, reviewData }: ReviewEditProps) => {
  const router = useRouter();
  const [starRating, setStarRating] = useState(reviewData.starRating);
  const [content, setContent] = useState(reviewData.content);
  const [specialNote, setSpecialNote] = useState(reviewData.specialNote);
  const [files, setFiles] = useState<File[]>([]);
  const [deletedImageIds, setDeletedImageIds] = useState<number[]>([]);
  const [reviewImages, setReviewImages] = useState<reviewImageType[]>([]);

  const { showModal, openModal, closeModal } = useModal();

  const {
    selectedItems,
    setSelectedItems,
    handleReviewItemClick,
    checkSelected,
    checkKeywordDisabledSubmit,
  } = useKeyword();

  const { patchReview } = useReviewMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (reviewImages.length + files.length >= 5) {
      alert("더이상 사진을 첨부할 수 없습니다.");
      return;
    }
    const selectedFiles = Array.from(event.target.files as FileList);
    setFiles((prevFiles: File[]) => [...prevFiles, ...selectedFiles]);
  };

  const onReviewSubmit = async () => {
    if (reviewId) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append(`files`, file);
      });

      const requestData = {
        content,
        specialNote,
        keywords: convertRequestKeywords(selectedItems),
        starRating,
        deletedImageIds,
      };

      formData.append(
        "request",
        new Blob([JSON.stringify(requestData)], {
          type: "application/json",
        })
      );

      await patchReview({
        reviewId: +reviewId,
        formData,
      });
    }
  };

  const checkDisabledSubmit = () => {
    if (!starRating || checkKeywordDisabledSubmit()) return true;
    return false;
  };

  const handleRemoveImage = (removeId: number) => {
    setReviewImages(reviewImages.filter((image) => image.id !== removeId));
    setDeletedImageIds([...deletedImageIds, removeId]);
  };

  useEffect(() => {
    if (reviewData) {
      setSelectedItems(reviewData.categoryKeywords);
      setReviewImages(reviewData.images);
    }
  }, [reviewData, setSelectedItems]);

  return (
    <>
      <div className="h-screen relative bg-white overflow-y-scroll">
        <header className="w-full h-[50px] relative flex justify-between">
          <div></div>
          <div className="m-auto">
            <Text size="medium">리뷰 쓰기</Text>
          </div>

          <button
            className="absolute top-1/2 right-[16px] transform -translate-y-1/2"
            onClick={openModal}
          >
            <Icon type="close" alt="close" />
          </button>
        </header>
        <div className="flex flex-col items-center gap-4 py-6">
          <Text size="xLarge" weight="bold">
            {reviewData.cafeName} 방문은 어땠나요?
          </Text>
          <div className="flex gap-[2px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                onClick={() => setStarRating(index + 1)}
                key={`star-${index + 1}`}
              >
                <Icon
                  type={`${index + 1 <= starRating ? "star" : "starEmpty"}`}
                  size="large"
                  alt="star"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 pt-6 pb-3 border-t-[1px] border-b-[1px] border-gray-200 border-solid">
          <div className="w-full flex gap-1.5 overflow-x-scroll">
            <label
              id="fileInput"
              className="min-w-[100px] h-[100px] flex justify-center items-center border-solid border-[1px] border-gray-300 rounded-lg cursor-pointer"
            >
              <Icon type="camera" size="xLarge" alt="camera" />
              <input
                type="file"
                id="fileInput"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <div className="flex gap-2">
              {files.map((file, index) => (
                <div key={index} className="min-w-[100px]">
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`Uploaded image ${index}`}
                    width={100}
                    height={100}
                  />
                </div>
              ))}
              {reviewImages.map((image, index) => (
                <div key={index} className="relative">
                  <button
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveImage(image.id)}
                  >
                    <Icon size="xSmall" type="close" alt="close" />
                  </button>
                  <div
                    key={image.id}
                    style={{
                      backgroundImage: `url(http:${image.imageUrl})`,
                    }}
                    className="w-[100px] h-[100px] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <Text size="small" className="text-gray-800">
            최대 5장 첨부할 수 있어요
          </Text>
        </div>
        <div className="px-4">
          <Condition
            handleItemClick={handleReviewItemClick}
            checkSelected={checkSelected}
            filterDatas={reviewFilterDatas}
            maxSelectCount={10}
          />
        </div>
        <div className="px-4">
          <div className="flex flex-col gap-2 mt-5">
            <Text size="medium">리뷰</Text>
            <TextArea
              placeholder="가게에 대한 소감을 30자 이상 적어주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-[290px]"
              maxlength={400}
            />
            <Text size="small" className="ml-auto text-gray-400">
              {content.length}/400
            </Text>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <Text size="medium">특이사항</Text>
            <TextArea
              placeholder="방문에 도움이 될 만한 정보를 공유해주세요.ex ) 콘센트 유무 / 2시간 이용 제한 / 평일 점심 웨이팅 1시간 / 영업시간 일시 변경 등"
              value={specialNote}
              onChange={(e) => setSpecialNote(e.target.value)}
              maxlength={200}
            />
            <Text size="small" className="ml-auto text-gray-400">
              {specialNote.length}/200
            </Text>
          </div>
          <div className="mt-10 mb-10">
            <Button
              size="full"
              type="submit"
              onClick={(e: React.SyntheticEvent<HTMLButtonElement>) =>
                onReviewSubmit()
              }
              disabled={checkDisabledSubmit()}
            >
              수정하기
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title={`작성하던 리뷰는 수정되지 않아요.\n의견을 수정하지 않고 나가시겠어요?`}
          okButtonText="이어서 리뷰 수정하기"
          cancelButtonText="나가기"
          okCallbackFunc={closeModal}
          cancelCallbackFunc={() => router.back()}
        />
      )}
    </>
  );
};

export default ReviewEdit;
