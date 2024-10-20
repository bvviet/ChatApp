import { useUserInfo } from "@hooks/index.js";
import { Avatar, Chip, IconButton, Stack, TextField } from "@mui/material";
import { openDialog } from "@redux/slices/dialogSlice";
import { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";

export const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    setImage(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: ".jpg, .jpeg, .png, .",
  });

  return (
    <div>
      <div
        {...getRootProps({ className: "bg-slate-100 text-center" })}
        className="border border-dashed border-gray-400 p-4"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Thả tệp vào đây...</p>
        ) : (
          <p>Kéo và thả một số tệp vào đây, hoặc nhấp để chọn tệp</p>
        )}
      </div>
      {image?.name && (
        <Stack className="mt-2">
          <Chip
            label={image?.name}
            onDelete={() => setImage(null)}
            className="font-bold"
          />
        </Stack>
      )}
    </div>
  );
};

const PostCreation = () => {
  const userInfo = useUserInfo();
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 rounded bg-white p-4 shadow">
      <IconButton size="medium">
        <Avatar className="!bg-primary-main">
          {userInfo?.fullName?.[0]?.toUpperCase()}
        </Avatar>
        <TextField
          className="flex-1"
          size="small"
          placeholder="What's on your minds?"
          onClick={() =>
            dispatch(
              openDialog({
                title: "Crate Post",
                contentType: "NEW_POST_DIALOG",
                additionalData: userInfo,
              }),
            )
          }
        />
      </IconButton>
    </div>
  );
};
export default PostCreation;
