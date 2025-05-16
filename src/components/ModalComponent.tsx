import { Dispatch, ReactNode, SetStateAction } from 'react';
import { View, Text, Modal, Pressable } from 'react-native'

interface ModalProps {
  animation: "slide" | "none" | "fade";
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode
}
export const ModalComponent = ({ animation, modalVisible, setModalVisible, children }: ModalProps) => {
  return (
    <Modal
      animationType={animation}
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Pressable onPress={() => setModalVisible(!modalVisible)} className="flex-1 flex w-full h-[100%] justify-center items-center bg-black/60 relative " >
        {children}
      </Pressable>
    </Modal>
  )
}
