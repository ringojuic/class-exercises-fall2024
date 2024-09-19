import React, { useState } from "react";
import { Button, Modal } from "antd";
import { defaultIconPrefixCls } from "antd/es/config-provider";
const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModelOpen(false);
    };
    return (
        <>
            <Button type ="primary" onClick={showModal}>
                Open Modal    
            </Button>  
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <img
                    alt="example"
                    src="https://picsum.photos/400/300"
                    width="400"
                    height="300"
                    style={
                        {
                            width: "100%",
                        }
                    }
                    />
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
            </Modal>
        </>
    );
    
};
export default App;