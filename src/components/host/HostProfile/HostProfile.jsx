import { useState } from "react";
import Modal from "../../Modal";
import EditProfileForm from "./EditProfileForm";

function HostProfile() {
  const profile = JSON.parse(localStorage.getItem("user-info"));
  console.log(profile);
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(isOpenModal);

  return (
    <section className="p-4 flex items-center justify-center gap-4 ">
      <div className="max-w-[50px] rounded-full overflow-hidden border-[1px] border-blue-700">
        <img
          src={profile.profilePicURL || "/avatar-placeholder.png"}
          alt={`image of ${profile.fullName}`}
        />
      </div>
      <span className="font-semibold">{profile.fullName}</span>
      <button
        onClick={() => setIsOpenModal((prev) => !prev)}
        className="text-xs text-blue-950 font-semibold border-solid py-1 px-2 bg-transparent border-[1px] border-blue-700 rounded-sm hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-transparent hover:text-blue-50 active:scale-95 "
      >
        Edit profile
      </button>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <h2 className="text-3xl font-bold">Edit profile</h2>
          <EditProfileForm />
        </Modal>
      )}
    </section>
  );
}

export default HostProfile;
