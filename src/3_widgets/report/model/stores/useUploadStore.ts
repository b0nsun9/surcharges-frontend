import { create } from 'zustand'

type UploadStore = {
  totalAmount: number,
  surchargeAmount: number,
  isUploading: boolean,
  isUploaded: boolean,
  canUpload: boolean,
  isError: boolean,
  setIsUploading: (isUploading: boolean) => void,
  setIsUploaded: (isUploaded: boolean) => void
  setCanUpload: (canUpload: boolean) => void
  setIsError: (isError: boolean) => void
  reset: () => void
}

const initialState = {
  totalAmount: 0,
  surchargeAmount: 0,
  isUploading: false,
  isUploaded: false,
  canUpload: false,
  isError: false
}

export const useUploadStore = create<UploadStore>((set) => ({
  ...initialState,
  setIsUploading: (isUploading: boolean) => set(() => ({ isUploading })),
  setIsUploaded: (isUploaded: boolean) => set(() => ({ isUploaded })),
  setCanUpload: (canUpload: boolean) => set(() => ({ canUpload })),
  setIsError: (isError: boolean) => set(() => ({ isError })),
  reset: () => set(initialState)
}))