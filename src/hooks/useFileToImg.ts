import { useState } from 'react';
import axios, { AxiosError } from 'axios';

/**
 * A custom hook for uploading images to Imgur and managing the upload state.
 * 
 * @returns {Object} An object containing:
 *   - imageUrl: The URL of the uploaded image (string | null)
 *   - uploadImage: Function to handle image upload (file: File) => Promise<void>
 *   - loading: Boolean indicating if upload is in progress
 *   - error: Error message if upload fails (string | null)
 *   - error_message: Alias for error (string | null)
 * 
 * @throws {Error} When image upload fails
 * 
 * @example
 * ```tsx
 * function ImageUploader() {
 *   const { imageUrl, uploadImage, loading, error } = useFileToImg();
 * 
 *   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
 *     const file = event.target.files?.[0];
 *     if (file) {
 *       uploadImage(file);
 *     }
 *   };
 * 
 *   return (
 *     <div>
 *       <input type="file" onChange={handleFileChange} accept="image/*" />
 *       {loading && <p>Uploading...</p>}
 *       {error && <p>{error}</p>}
 *       {imageUrl && <img src={imageUrl} alt="Uploaded" />}
 *     </div>
 *   );
 * }
 * ```
 */
const useFileToImg = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
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

    const uploadImage = async (file: File) => {
        setLoading(true);
        setError(null);

        // Validate file before upload
        if (!file.type.startsWith('image/')) {
            setError('Please select a valid image file');
            setLoading(false);
            return;
        }

        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            setError('Image size exceeds 10MB limit');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('https://api.imgur.com/3/image', formData, {
                headers: {
                    Authorization: `Client-ID ${import.meta.env.VITE_IMGUR_CLIENT_ID}`,
                },
                timeout: 10000 // 10 second timeout
            });

            if (response.data.success) {
                setImageUrl(response.data.data.link);
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (err) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };

    return { imageUrl, uploadImage, loading, error, error_message: error };
};

export default useFileToImg;
