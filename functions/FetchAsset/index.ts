import axios from "axios";
import { isAddress } from "../AddressValidate";

export const FetchAssetFromOpenSea = async (
  address: string,
  token: string
): Promise<Array<any> | ErrorMap> => {
  if (!isAddress(address)) {
    console.log("not address");
    return Promise.reject({ error: "Not a valid address" });
  }

  try {
    const URI = `https://api.opensea.io/api/v1/asset/${address}/${token}`;
    const response = await axios.get(URI);
    return Promise.resolve(response.data);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error });
  }
};

interface ErrorMap {
  [name: string]: any;
}
