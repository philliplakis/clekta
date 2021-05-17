import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import Web3 from "web3";
let web3: Web3;

const { persistAtom } = recoilPersist();

export const WebThreeAccounts = atom({
  key: "web3Accounts",
  effects_UNSTABLE: [persistAtom],
  default: selector({
    key: "web3Accounts/Default",
    get: async () => {
      try {
        const accounts = await getAccounts();
        return accounts;
      } catch (e) {
        console.error("ERROR GET web3/Default", e);
        return null;
      }
    },
  }),
});

export const WebThree = atom({
  key: "web3",
  effects_UNSTABLE: [persistAtom],
  default: selector({
    key: "web3/Default",
    get: async () => {
      // window.addEventListener("load", async () => {
      try {
        if (
          typeof window !== "undefined" &&
          Boolean(window.ethereum || window.web3)
        ) {
          const web3 = await getWeb3();
          return web3;
        }
        return null;
      } catch (e) {
        console.error("ERROR GET web3/Default", e);
        return null;
      }
    },
  }),
});

declare let window: any;

async function getAccounts() {
  const accounts = await web3.eth.getAccounts();
  return accounts;
}

async function getWeb3() {
  if (window.ethereum) {
    // Modern dapp browsers
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    return web3;
  } else if (window.web3) {
    // Legacy dapp browsers...
    web3 = new Web3(window.web3.currentProvider);
    return web3;
  } else {
    return null;
  }
}
