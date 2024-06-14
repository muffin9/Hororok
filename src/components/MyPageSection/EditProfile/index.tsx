"use client";

import useProfileMutation from "@/Hooks/Api/myPage/useProfileMutation";
import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import useDebounce from "@/Hooks/useDebounce";

const EditProfile = () => {
  const { myProfile, postProfile } = useProfileMutation();
  const [nickname, setNickname] = useState("");
  const [file, setFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files;

    if (selectedFile && selectedFile.length > 0) {
      const file = selectedFile[0];
      setFile(file);

      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  useEffect(() => {
    if (myProfile) {
      setNickname(myProfile.nickname);
      setImageUrl(
        `${myProfile.picture === null ? "/assets/Images/default_profile.png" : `http://${myProfile.picture}`}`
      );
    }
  }, []);

  const onProfileSubmit = useDebounce(async () => {
    const formData = new FormData();
    if (file) formData.append("file", file);
    await postProfile({ formData, nickname });
  }, 500);

  return (
    <section className="px-4">
      <div className="flex justify-center">
        <label
          id="fileInput"
          className="min-w-[100px] h-[100px] flex justify-center items-center cursor-pointer"
        >
          <Image
            src={imageUrl}
            width={90}
            height={90}
            alt="profile_image"
            layout="fixed"
          />
          <input
            type="file"
            id="fileInput"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label id="nickname" className="text-sm font-bold">
          닉네임
        </label>
        <input
          type="text"
          id="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={handleNicknameChange}
          className="h-[50px] p-4 border-solid border-[1px] border-gray-400 rounded-lg"
        />
      </div>
      <div className="w-[358px] fixed bottom-0 bg-white">
        <Button size="full" onClick={onProfileSubmit}>
          완료
        </Button>
      </div>
    </section>
  );
};

export default EditProfile;
