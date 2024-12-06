import {create} from "zustand";

interface ModalState {
  isOpen: boolean;
  buttonId: string;
  setButtonId: (id: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  buttonId: "",
  setIsOpen: (isOpen) => set({ isOpen }),
  setButtonId: (buttonId) => set({ buttonId })
}));

export { useModalStore };
