import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../services/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function GoogleAuth({ prefix }) {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  async function authWithGoogle() {
    try {
      const newUser = await signInWithPopup(auth, provider);
      if (!newUser && error) {
        throw new Error(error.message);
      }

      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // login
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        localStorage.setItem("isLoggedin", true);
        redirect("/host");
      } else {
        //signup
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          fullName: newUser.user.displayName,
          profilePicURL: newUser.user.photoURL,
          cars: [],
          createdAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));

        setIsLoading(false);
        toast("Welcome back!", {
          icon: "🤗",
        });
        return navigate("/host");
      }
    } catch (e) {
      return toast.error(e.message);
    }
  }

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={authWithGoogle}
        className="bg-blue-600 flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 text-blue-50 font-medium transition-all duration-200 active:scale-95 text-sm"
      >
        <span>
          <img className="max-h-[25px]" src="/google.png" alt="" />
        </span>
        <span>{prefix} with Google</span>
      </button>
    </div>
  );
}

export default GoogleAuth;
