import { useState } from "react";
import { Button } from "./buttons";
import ModalBody from "./modal/ModalBody";
import ModalContainer from "./modal/ModalContainer";
import ModalFooter from "./modal/ModalFooter";
import ModalTitle from "./modal/ModalTitle";
import { Loader } from "./utils";

export default function ProjectDescription(){
    const {isOpen, setIsOpen} = useState(false)
    const {loading, setLoading} = useState(false)
    return(
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen} size="sm">
            <ModalTitle>Reload Account</ModalTitle>

            <ModalBody>
                
            </ModalBody>

            <ModalFooter>
                <Button
                    color={"secondary"}
                    disabled={loading}
                    onClick={() => {
                        setIsOpen(false);
                        setValidationMessage([]);
                        setAmount("");
                        setTimeout(() => {
                            if (type !== null) {
                                resetType();
                            }
                        }, 300);
                    }}
                >
                    Close
                </Button>

                <Button color={"primary"} disabled={loading} onClick={onSubmit}>
                    {loading && <Loader color={"white"} />}
                    <span>{type === null ? "Reload" : "Update"}</span>
                </Button>
            </ModalFooter>
        </ModalContainer>
    )
}