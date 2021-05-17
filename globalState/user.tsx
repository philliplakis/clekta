import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserDefaults = atom({
  key: "userData",
  default: {
    loggedIn: false,
    token: "",
    user: {},
    decoded: {},
  },
  effects_UNSTABLE: [persistAtom],
});
