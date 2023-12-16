import useCarPreviewImgs from "../../../hooks/usePreviewCarImgs";
import { useRef } from "react";
import useCarDataStore from "../../../store/useCarDataStore";
import useUpdateCar from "../../../hooks/useUpdateCar";
import extractUidFromStorageURL from "../../../utils/extractUidFromURL";
import useDeleteCarImg from "../../../hooks/useDeleteCarImg";
function Photos() {
  const { selectedFiles, handleImageChange, setSelectedFiles } =
    useCarPreviewImgs();
  const { isUpdating, updateCar, error } = useUpdateCar();
  const car = useCarDataStore((state) => state.car);
  const { isDeleting, handleDeleteCarImg } = useDeleteCarImg();

  const fileRef = useRef(null);
  // console.log(selectedFiles);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateCar(null, selectedFiles);
    setSelectedFiles(null);
  }

  async function handleClickDelete(e) {
    if (isDeleting) return;
    const uid = extractUidFromStorageURL(e.target.src);
    const url = e.target.src;
    console.log(uid);

    await handleDeleteCarImg(uid, url);
  }

  return (
    <section className="pb-8 bg-blue-50 w-screen -mx-4  px-4">
      <h2 className="text-2xl font-semibold my-2 text-center">
        Update Car Photos
      </h2>
      <h3 className="font-semibold mb-2">Current photos on listing:</h3>

      <div className="grid gap-2 grid-cols-hostCarImgs grid-rows-hostCarImgsRows items-center justify-center md:justify-start">
        {car?.imgs.length > 0 ? (
          car.imgs.map((img, idx) => (
            <div
              key={idx}
              className="max-h-full max-w-full bg-blue-100 rounded-md object-cover overflow-hidden shadow-md hover:scale-105 cursor-pointer transition-all duration-200 "
            >
              <img
                className="w-full"
                src={img}
                alt=""
                onClick={handleClickDelete}
              />
            </div>
          ))
        ) : (
          <div>
            <fogure className="relative  ">
              <img
                className="w-full rounded-lg"
                src="/car-placeholder.webp"
                alt="palceholder image with car"
              />
              <figcaption className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-blue-400 font-bold text-xl w-[80%] text-center">
                No imgs on this listing
              </figcaption>
            </fogure>
          </div>
        )}
      </div>

      <h3 className="font-semibold mt-6 mb-2">Selected photos:</h3>
      <form className="flex flex-col gap-4">
        <label className="grid gap-2 grid-cols-hostCarImgs grid-rows-hostCarImgsRows items-center justify-center md:justify-start">
          {selectedFiles &&
            selectedFiles.map((file, idx) => (
              <div
                key={idx}
                className="max-h-full max-w-full bg-yellow-200 rounded-md object-cover overflow-hidden shadow-md hover:scale-105 cursor-pointer transition-all duration-200 "
              >
                <img
                  className="w-full"
                  src={file || "/car-placeholder.webp"}
                  alt=""
                />
              </div>
            ))}
          <span
            className="cursor-pointer aspect-video w-full max-h-full grid font-semibold place-content-center  bg-blue-200 rounded-md text-sm hover:bg-blue-300 "
            onClick={() => fileRef.current.click()}
          >
            + Add Images (up to 10)
          </span>
          <input
            type="file"
            hidden
            ref={fileRef}
            onChange={handleImageChange}
            multiple
          />
        </label>
        <button
          disabled={isUpdating}
          onClick={handleSubmit}
          className="w-full md:w-1/3  bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
        >
          {isUpdating ? "Saving changes" : "Save"}
        </button>
      </form>
    </section>
  );
}

export default Photos;
