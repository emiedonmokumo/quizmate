'use client'
import { useDropzone } from 'react-dropzone';
import { RxCrossCircled } from "react-icons/rx";

const Dropzone = ({ image, setImage, setTypedText }) => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            setImage(file);
        }
    });

    return (
        <div className="my-5 relative">
            <div {...getRootProps()} className="relative border-dashed border-2 p-4 lg:h-80 sm:h-52 rounded-3xl border-[#3E6EFF] text-white flex flex-col justify-center items-center overflow-hidden cursor-pointer">
                <input {...getInputProps()} />
                {image ? (
                    <div className='relative w-full h-full flex flex-col justify-center items-center'>
                        <img src={URL.createObjectURL(image)} alt="Uploaded preview" className='absolute inset-0 w-full h-full object-contain' />
                        <button className='absolute right-0 top-0 p-2' onClick={(e) => {e.stopPropagation(); setImage(null); setTypedText('')}}><RxCrossCircled className='text-4xl sm:text-2xl text-blue-400' /></button>
                    </div>
                ) : (
                    <>
                        <img src="/image-box.png" className='mb-5' alt="" />
                        <p className='text-center hover:bg-gradient-to-r hover:from-[#9D69FF] hover:to-[#3E6EFF] hover:text-transparent hover:bg-clip-text sm:text-sm text-[#94A3B8]'>Drag and drop some files here, or click to select files</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Dropzone;
