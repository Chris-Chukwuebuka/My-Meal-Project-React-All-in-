import React from 'react'
import { ThreeDots } from "react-loader-spinner";
const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 ">
            <ThreeDots
                height="80"
                width="280"
                radius="9"
                color="#1746a2"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loading