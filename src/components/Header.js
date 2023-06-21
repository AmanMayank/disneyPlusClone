import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  SignOut,
  DropDown,
} from "../styles/Header";
import { firebaseApp } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoginDetails, setSignOutState } from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    console.log("user.name", user.name !== null);
    if (user.name !== "") {
      navigate("/home");
    }
  }, [user.name, navigate]);

  const handleAuth = async () => {
    const auth = getAuth(firebaseApp);
    if (user.name === "") {
      try {
        const provider = new GoogleAuthProvider();
        const userData = await signInWithPopup(auth, provider);
        dispatch(setUserLoginDetails(userData.user));
        console.log(userData.user);
      } catch (err) {
        console.log(err);
      }
    } else if (user.name !== "" || user.name !== null) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      {user.name === "" || user.name === null ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>Home</span>
            </a>

            <a href="/home">
              <img src="/images/search-icon.svg" alt="Search" />
              <span>Search</span>
            </a>

            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="Watchlist" />
              <span>Watchlist</span>
            </a>

            <a href="/home">
              <img src="/images/original-icon.svg" alt="Originals" />
              <span>Originals</span>
            </a>

            <a href="/home">
              <img src="/images/movie-icon.svg" alt="Movies" />
              <span>Movies</span>
            </a>

            <a href="/home">
              <img src="/images/series-icon.svg" alt="Series" />
              <span>Series</span>
            </a>
          </NavMenu>

          <SignOut>
            <UserImg src={user.photo} alt={user.name} />
            <DropDown>
              <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

export default Header;
