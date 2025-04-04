export type AuthDto = {
  accessToken: string;
  accessTokenExpiration: number;
};

export type SignUpDto = {
  accessToken: string;
  accessTokenExpiration: number;
  userName: string;
};

export type params = {
  userName?: string;
  role?: number;
  password?: string;
};
