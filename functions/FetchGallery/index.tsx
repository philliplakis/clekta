import axios from "axios";
import { isAddress } from "../AddressValidate";

const formatTokens = (tokenArray: Array<any>, owner: string) => {
  const formattedTokens = new Array();
  tokenArray.forEach((ufT) => {
    let fT = {
      id: ufT.id,
      token_id: ufT.token_id,
      name: ufT.name,
      hidden: false,
      private: false,
      description: ufT.description,
      collection: ufT.collection?.name,
      created_by: ufT.creator?.address ?? null,
      owned_by: owner,
      created_by_owner: ufT.creator === owner,
      properties: ufT.traits,
      featured: false,
      timestamp: null,
      created_at: ufT.asset_contract.created_date || null,
      tags: [],
      meta_title: null,
      meta_description: null,
    };
    // @ts-ignore
    fT.contract = {
      contract_address: ufT.asset_contract.address || null,
      contract_name: ufT.asset_contract.name || null,
      contract_symbol: ufT.asset_contract.symbol || null,
      contract_description: ufT.asset_contract.description || null,
      contract_external_url: ufT.asset_contract.external_link || null,
    };
    // @ts-ignore
    fT.media = {
      image_url: ufT.image_url || null,
      video_url: ufT.video_url || null,
      audio_url: ufT.audio_url || null,
    };
    formattedTokens.push(fT);
  });
  return formattedTokens;
};

export const FetchFromOpenSea = async (
  address: string
): Promise<Array<any> | ErrorMap> => {
  if (!isAddress(address)) {
    console.log("not address");
    return Promise.reject({ error: "Not a valid address" });
  }

  try {
    const URI = `https://api.opensea.io/api/v1/assets?&order_direction=asc&offset=0&limit=50&owner=${address}`;
    const response = await axios.get(URI);
    const tokenArray = response.data.assets;
    const formattedTokens = formatTokens(tokenArray, address);
    // console.log(formattedTokens);
    // console.log(`Loaded ${formattedTokens.length} tokens.`);
    return Promise.resolve(formattedTokens);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error });
  }
};

interface ErrorMap {
  [name: string]: any;
}
