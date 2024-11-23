import { FC } from "react";

interface OutputProps {
    output: string | null; // The output can be a string or null
}

const Output: FC<OutputProps> = ({ output }) => {
    return (
        <div className="w-full container" style={{ height: "75vh", border: "1px solid #333" }}>
            {output ? output : "Run the code..."}
        </div>
    );
};

export default Output;