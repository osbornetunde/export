import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Button,
    useClipboard,
} from '@chakra-ui/react';
import { InputWrapper, StyledModalContent } from './styles';
import { Input } from '../../components';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
// import Button from "@progress/kendo-react-buttons/dist/es/Button";

const ModalWindow = ({ isOpen, onClose }) => {
    const { control, errors, watch } = useForm();

    const value1 = 'path/dir/subdir/filename';
    const value2 = 'filename';

    const { hasCopied: hasCopiedFilePath, onCopy: onCopyFilePath } = useClipboard(value1);
    const { hasCopied: hasCopiedFileName, onCopy: onCopyFileName } = useClipboard(value2);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent width={'50rem'} maxWidth={'70vw'}>
                    <ModalHeader>Export File</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <StyledModalContent></StyledModalContent>
                    </ModalBody>
                    <InputWrapper>
                        <Input
                            width={'65%'}
                            label="File Path"
                            name="filePath"
                            control={control}
                            errors={errors}
                            defaultValue=""
                        />
                        <Button
                            leftIcon={<HiOutlineClipboardCopy />}
                            colorScheme="blue"
                            variant="solid"
                            onClick={onCopyFilePath}
                        >
                            {hasCopiedFilePath ? 'Copied' : 'Copy'}
                        </Button>
                    </InputWrapper>
                    <InputWrapper>
                        <Input
                            width={'65%'}
                            label="File Name"
                            name="fileName"
                            control={control}
                            errors={errors}
                            defaultValue=""
                        />
                        <Button
                            leftIcon={<HiOutlineClipboardCopy />}
                            colorScheme="green"
                            variant="solid"
                            onClick={onCopyFileName}
                        >
                            {hasCopiedFileName ? 'Copied' : 'Copy'}
                        </Button>
                    </InputWrapper>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Export
                        </Button>
                        <Button variant="ghost">Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalWindow;
