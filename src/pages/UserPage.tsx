import { useGetUserInfoQuery } from "entities/user/api/userApi";
import React from "react";
import { useAppSelector } from "shared/model";

function UserPage() {
  const userName = useAppSelector((state) => state.AUTH_TAG.userName);
  const { data, isLoading, isSuccess } = useGetUserInfoQuery({
    userName,
  });
  return (
    <div>
      UserName: {isSuccess && data} {isLoading && "Загрузка данных..."}
    </div>
  );
}

export default UserPage;
