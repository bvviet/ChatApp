import { ImageUploader } from "@components/PostCreation";
import { Avatar, Button, DialogActions, DialogContent, TextareaAutosize } from "@mui/material";

const NewPostDialog = ({ userInfo }) => (
  <div>
    <DialogContent>
      <div className="flex items-center gap-2">
        <Avatar className="!h-7 !w-7 !bg-primary-main">
          {userInfo?.fullName?.[0]?.toUpperCase()}
        </Avatar>
        <p className="font-bold">{userInfo?.fullName}</p>
      </div>
      <TextareaAutosize
        minRows={3}
        placeholder="What's on your minds"
        className="mt-4 w-full p-2"
      />
      <ImageUploader />
    </DialogContent>
    <DialogActions className="!px-6 !pb-5 !pt-0">
      <Button fullWidth variant="contained">
        POST
      </Button>
    </DialogActions>
  </div>
);

export default NewPostDialog;
