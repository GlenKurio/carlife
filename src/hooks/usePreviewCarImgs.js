import { useState } from "react";
import { toast } from "react-hot-toast";
import useCarDataStore from "../store/useCarDataStore";

const useCarPreviewImgs = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const car = useCarDataStore((state) => state.car);
  // console.log(car);
  const setCar = useCarDataStore((state) => state.setCar);

  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const files = e.target.files;
    let newSelectedFiles = [];

    if (files.length > 0 && files.length <= 10) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith("image/")) {
          if (file.size > maxFileSizeInBytes) {
            toast.error(`File ${file.name} size must be less than 2MB`);
          } else {
            const reader = new FileReader();
            reader.onloadend = () => {
              newSelectedFiles.push(reader.result);
              if (newSelectedFiles.length === files.length) {
                setSelectedFiles(newSelectedFiles);

                // Create a new array with the combined previews
                // const updatedPreviews = car.imgs.concat(
                //   newSelectedFiles.map((img) => img.preview)
                // );

                // // Update the car state with the combined previews
                // setCar({ ...car, imgs: updatedPreviews });
              }
            };
            reader.readAsDataURL(file);
          }
        } else {
          toast.error(`File ${file.name} is not an image file`);
        }
      }
    } else if (files.length > 10) {
      toast.error("Please select up to 10 images");
    }
  };

  return { selectedFiles, handleImageChange, setSelectedFiles };
};

export default useCarPreviewImgs;
