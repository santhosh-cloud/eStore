import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { updateUser } from "../redux/features/user/userSlice";
export const useUser = () => {
  const { isLoggedIn, name, email, profileImg } = useSelector(
    (state) => state.user
  );
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "authenticated" && !isLoggedIn) {
      console.log(session.user);
      dispatch(updateUser(session.user));
    }
  }, [status]);
  return { isLoggedIn, name, email, profileImg };
};
