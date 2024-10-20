import Header from "@components/Header";
import { useGetAuthUserQuery } from "@services/rootApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { saveInfo } from "@redux/slices/authSlice";

const ProtectedLayout = () => {
  const response = useGetAuthUserQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(saveInfo(response.data));
    }
  }, [response.isSuccess, dispatch, response.data]);

  if (response.isLoading) {
    return <p>loading...</p>;
  }
  if (!response?.data?._id) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <Header />
      <Outlet />;
    </>
  );
};
export default ProtectedLayout;
