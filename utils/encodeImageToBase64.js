export const encodeImageToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // Resolve the full data URL, not just the base64 part
    reader.onerror = (error) => reject(error);
  });
};
