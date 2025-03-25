
export type AuthDto = {
    accessToken: string | number;
    accessTokenExpiration: string | number;
}

export type SignUpDto = {
    accessToken: string;
    accessTokenExpiration: number;
    userName: string;
}

export type params = {
    userName?: string;
    role?: number;
    password?: string;
}