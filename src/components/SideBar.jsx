import styled from "@emotion/styled";
import { useDetectLayout } from "@hooks/index";
import {
  HomeOutlined,
  Hub,
  Lock,
  Message,
  People,
  Translate,
} from "@mui/icons-material";
import { Drawer, List, ListSubheader } from "@mui/material";
import { toggleDrawer } from "@redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListStyle = styled(List)`
  padding: 16px;
  border-radius: 4px;
  gap: 4px;
`;

const SideContent = () => (
  <div className="flex w-64 flex-col gap-4">
    <ListStyle className="flex flex-col bg-white shadow">
      <Link to="/" className="flex items-center gap-1">
        <HomeOutlined fontSize="small" /> New Feeds
      </Link>
      <Link to="/messages" className="flex items-center gap-1">
        <Message fontSize="small" /> Messenger
      </Link>
      <Link to="/friends" className="flex items-center gap-1">
        <People fontSize="small" /> Friends
      </Link>
      <Link to="/groups" className="flex items-center gap-1">
        <Hub fontSize="small" /> Groups
      </Link>
    </ListStyle>

    <ListStyle className="flex flex-col bg-white shadow">
      <ListSubheader className="!p-0 !leading-none">Settings</ListSubheader>
      <Link to="/setting/account" className="flex items-center gap-1">
        <Lock fontSize="small" /> Account
      </Link>
      <Link to="/setting/languages" className="flex items-center gap-1">
        <Translate fontSize="small" /> Languages
      </Link>
    </ListStyle>
  </div>
);

const SideBar = () => {
  const { isMediumLayout } = useDetectLayout();
  const isShowDrawer = useSelector((state) => state.settings.isShowDrawer);
  const dispatch = useDispatch();

  return isMediumLayout ? (
    <Drawer
      open={isShowDrawer}
      onClose={() => dispatch(toggleDrawer())}
      classes={{ paper: "p-4 flex flex-col gap-4 !bg-dark-200" }}
    >
      <div>
        <Link to="/">
          <img src="/weconnect-logo.png" alt="" className="h-8 w-8" />
        </Link>
      </div>
      <SideContent />
    </Drawer>
  ) : (
    <SideContent />
  );
};

export default SideBar;
