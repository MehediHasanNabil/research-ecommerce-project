import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useFirebaseAuth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, phoneNumber, photoURL, accessToken } =
          user || {};
        dispatch(
          userLoggedIn({
            accessToken,
            user: {
              displayName,
              email,
              phoneNumber,
              photoURL,
            },
          })
        );
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, auth]);

  return user;
}
