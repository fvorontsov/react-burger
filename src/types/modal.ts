import {ReactNode} from "react";

export type TModalOverlay = {
    closeModal: () => void;
};

export type TModal = TModalOverlay & {
    children: ReactNode;
    title?: string;
    closeModal: () => void;
};
