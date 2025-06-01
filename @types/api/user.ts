declare global{
    type User = {
        id: string;
        email: string;
        nickname: string;
        cmdrName: string;
        password: string;
        isAdmin: boolean;
        locale: string;
        isBanned: boolean;
        isActivated: boolean;
        activationtoken: string;
        passwordresettoken: string;
        emailchangetoken: string;
        newemail: string;
        discordid: string;
        discordname: string;
    }
}