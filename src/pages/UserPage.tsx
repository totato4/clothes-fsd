import { useGetUserMutation } from "entities/auth/api/authApi";
import inMemoryJWT from "entities/auth/model/inMemoryJWT";
import { useEffect } from "react";

function UserPage() {
  const accessToken = inMemoryJWT.getToken();
  // const userName = useAppSelector((state) => state.AUTH_TAG.userName);
  // const { data, isLoading, isSuccess } = useGetUserInfoQuery({
  //   userName,
  // });

  const [getUser, { data }] = useGetUserMutation();
  useEffect(() => {
    accessToken && getUser(accessToken);
  }, [accessToken, getUser]);
  return (
    <div>
      Имя пользователя: {data?.name} <br />
      Статус: {data?.role == 1 && "Обычный пользователь"}
    </div>
  );
}

export default UserPage;
