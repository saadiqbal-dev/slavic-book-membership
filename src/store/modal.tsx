import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));

export { useModalStore };
