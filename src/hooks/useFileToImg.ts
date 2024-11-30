import { useState } from 'react';
import axios, { AxiosError } from 'axios';

const useFileToImg = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleError = (error: unknown) => {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            const status = axiosError.response?.status;
            const errorMap: Record<number, string> = {
                400: 'Invalid image format or size. Please try with a different image.',
                401: 'Authentication failed. Please check your credentials.',
                403: 'Access forbidden. Please check your permissions.',
                413: 'Image is too large. Please upload a smaller image (max 10MB).',
                429: 'Rate limit exceeded. Please wait a moment and try again.',
                500: 'Server error. Please try again later.',
                503: 'Service unavailable. Please try again in a few minutes.'
            };

            setError(errorMap[status!] || `Upload failed: ${axiosError.message}`);
        } else if (error instanceof Error) {
            setError(`Upload error: ${error.message}`);
        } else {
            setError('An unexpected error occurred while uploading');
        }
    };

    const uploadImage = async (file: File): Promise<string | null> => {
        setLoading(true);
        setError(null);

        // Validate file before upload
        if (!file.type.startsWith('image/')) {
            setError('Please select a valid image file');
            setLoading(false);
            return null;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            setError('Image size exceeds 10MB limit');
            setLoading(false);
            return null;
        }

        const formData = new FormData();
        formData.append('image', file);
        
        try {
            const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_IMGBB_API_KEY}`, formData);
            if (response?.data?.success) {
                return response.data.data.url;
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (err) {
            handleError(err);
            console.log(err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { uploadImage, loading, error };
};

export default useFileToImg;
