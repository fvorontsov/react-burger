export type TInput = {
    Types: {
        EMAIL: "email";
        TEXT: "text";
        PASSWORD: "password";
    };
    Names: {
        EMAIL: "email";
        NAME: "name";
        PASSWORD: "password";
        CODE: "token";
    };
    Placeholders: {
        EMAIL: string;
        PASSWORD: string;
        NAME: string;
        RESTORE: string;
        NEW_PASS: string;
        CODE: string;
    };
};

export type TUrls = {
    base: string;
    general: {
        ingredients: string;
        orders: string;
    };
    auth: {
        login: string;
        register: string;
        logout: string;
        token: string;
        user: string;
    };
    passWordReset: {
        forgot: string;
        reset: string;
    };
};

export type TString = {
    [name: string]: string;
};
