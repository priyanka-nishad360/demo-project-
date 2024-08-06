import { useState } from 'react';
import Dropzone from 'react-dropzone';

import { Page, Document } from 'react-pdf/dist/esm/entry.vite';
import { toast } from 'react-toastify';
const MOM_ITAX_URL = process.env.NEXT_PUBLIC_MOM_ITAX_URL;
import { ProgressBox, UploadBox, ProgressBar } from '../styles/UploadFileStyles.jsx';

const currencyFormatter = Intl.NumberFormat('en-IN', {
    currency: 'INR',
    style: 'currency',
});

const handleDownloadJSON = () => {
    const a = document.createElement('a');
    const text = '{}';
    const blob = new Blob([text], { type: 'application/json', });
    a.download = 'ITR JSON XH0000XK 2022-23.json';
    a.href = URL.createObjectURL(blob);
    a.click();
};

export default function FileItr() {
    const [uploading, setUploading] = useState(false);

    const [file, setFile] = useState(null);

    const [fileUrl, setFileUrl] = useState('');

    const [data, setData] = useState(null);


    const handleDrop = async (acceptedFiles) => {
        if (!acceptedFiles.length) {
            return;
        }

        const file = acceptedFiles[0];
        
        try {
            setUploading(true);

            const formData = new FormData();

            formData.append('file', file);

            const res = await fetch(`http://localhost:8080/ocr`, {
                method: 'POST',
                body: formData,
                mode: 'cors',
            });

            if (!res.ok) {
                throw new Error('Could not upload file');
            }

            const { data } = await res.json();

            console.log(data);

            setData(data);
        } catch (e) {
            console.error(e);
            toast(e.message, { type: 'error' });
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="mx-auto my-20">
            {
                data ? (
                <div className="flex flex-col gap-4 max-w-max md:mx-auto shadow-lg border rounded-md p-10 mx-8">
                    <div className="flex justify-between items-center">
                        <div className='flex gap-2'>
                            <strong>PAN of Deductor:</strong>
                            {data['PART A Pan of deductor']}
                        </div>
                        <div className='flex gap-2'>
                            <strong>Assessment Year:</strong>
                            AY 2022-23
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <h6 className="text-xl">Summary of Incomes, Deductions and Taxes</h6>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 justify-between">
                                <strong>Total Income From Salary From Current Employer:</strong>
                                {
                                    currencyFormatter.format(data['TOTAL AMOUNT OF SALARY RECEIVED FROM CURRENT EMPLOYER'])
                                }
                            </div>
                            <div className="flex gap-4 justify-between">
                                <strong>Deductible Amount Under Chapter VI-A:</strong>
                                {
                                    currencyFormatter.format(data['AGGREGATE OF DEDUCTIBLE AMOUNT UNDER CHAPTER VI-A'])
                                }
                            </div>
                            <div className="flex gap-4 justify-between">
                                <strong>Deductible Amount Under Section 16:</strong>
                                {
                                    currencyFormatter.format(data['TOTAL AMOUNT OF DEDUCTIONS UNDER SECTION 16'])
                                }
                            </div>
                            <div className="flex gap-4 justify-between">
                                <strong>Total Taxable Income:</strong>
                                {
                                    currencyFormatter.format(data['TOTAL TAXABLE INCOME'])
                                }
                            </div>
                            <div className="flex gap-4 justify-between">
                                <strong>NET TAX PAYABLE:</strong>
                                {
                                    currencyFormatter.format(data['NET TAX PAYABLE'])
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            onClick={handleDownloadJSON}
                            className="bg-primary px-8 py-3 text-white rounded-md font-semibold text-sm cursor-pointer"
                        >Download JSON</button>
                    </div>
                </div>
            ) : uploading
                ? (
                    <div className="flex flex-col justify-center items-center gap-4 w-1/2 h-96 md:mx-auto shadow-lg border rounded-md p-10 mx-8">
                        Uploading
                        <ProgressBar />
                    </div>
                )
                : (
                    <Dropzone onDrop={handleDrop} accept=".pdf">
                        {({ getRootProps, getInputProps }) => (
                            <div
                                {...getRootProps()}
                                className="max-w-3xl md:mx-auto border-2 border-dashed border-zinc-400 rounded-md py-20 mx-8"
                            >
                                <input {...getInputProps()} />
                                <div className="flex flex-col items-center">
                                    <span className="block object-contain h-10 w-10 fill-primary">
                                        {uploadIcon}
                                    </span>
                                    <p className="text-center mt-5 leading-loose font-semibold">
                                        Drag & drop files to upload <br /> Or
                                    </p>
                                    <button className="inline-block bg-primary mt-3 px-8 py-3 text-white rounded-md font-semibold text-sm">
                                        Browse
                                    </button>
                                    <p className="text-zinc-600 text-xs font-semibold mt-3">
                                        Only PDF Files are supported
                                    </p>
                                </div>
                            </div>
                        )}
                    </Dropzone>
                )
            }
        </div>
    );
}

const uploadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z" />
    </svg>
);

const pdfIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V320 240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H304v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V304 240c0-8.8 7.2-16 16-16z" />
    </svg>
);
