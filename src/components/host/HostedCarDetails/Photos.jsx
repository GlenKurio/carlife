import useCarPreviewImgs from "../../../hooks/usePreviewCarImgs";
import { useRef } from "react";
import useCarDataStore from "../../../store/useCarDataStore";
import useUpdateCar from "../../../hooks/useUpdateCar";

function Photos() {
  const { selectedFiles, handleImageChange, setSelectedFiles } =
    useCarPreviewImgs();
  const { isUpdating, updateCar, error } = useUpdateCar();
  const car = useCarDataStore((state) => state.car);

  const fileRef = useRef(null);
  // console.log(selectedFiles);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateCar(null, selectedFiles);
    setSelectedFiles(null);
  }

  return (
    <section className="py-8">
      <article>
        <h2>Current images on listing:</h2>
        <div className="grid gap-2 grid-cols-hostCarImgs">
          {car.imgs.map((img, idx) => (
            <div className="max-h-full max-w-full bg-yellow-200 rounded-md object-cover overflow-hidden shadow-md hover:scale-105 cursor-pointer transition-all duration-200 ">
              <img className="w-full" src={img} alt="" key={idx} />
            </div>
          ))}
        </div>
      </article>
      <form>
        {/* TODO: fix click on image. Make click on image to delete the image */}
        <label className="grid gap-2 grid-cols-hostCarImgs">
          {selectedFiles &&
            selectedFiles.map((file, idx) => (
              <div className="max-h-full max-w-full bg-yellow-200 rounded-md object-cover overflow-hidden shadow-md hover:scale-105 cursor-pointer transition-all duration-200 ">
                <img
                  className="w-full"
                  src={file || "/car-placeholder.webp"}
                  alt=""
                  key={idx}
                />
              </div>
            ))}
          <span
            className="cursor-pointer aspect-video w-full max-h-full grid font-semibold place-content-center  bg-blue-200 rounded-md text-sm hover:bg-blue-300"
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
          onClick={handleSubmit}
          className="w-full  bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
        >
          Save
        </button>
      </form>
    </section>
  );
}

export default Photos;
