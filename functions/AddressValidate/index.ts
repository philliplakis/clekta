import SHA3 from "crypto-js/sha3";

const sha3 = (value: string): string => {
  return SHA3(value, {
    outputLength: 256,
  }).toString();
};

const isChecksumAddress = function (address: string) {
  // Check each case
  address = address.replace("0x", "");
  let addressHash = sha3(address.toLowerCase());

  for (let i = 0; i < 40; i++) {
    // The nth letter should be uppercase if the nth digit of casemap is 1
    if (
      (parseInt(addressHash[i], 16) > 7 &&
        address[i].toUpperCase() !== address[i]) ||
      (parseInt(addressHash[i], 16) <= 7 &&
        address[i].toLowerCase() !== address[i])
    ) {
      return false;
    }
  }
  return true;
};

export const isAddress = (address: string): boolean => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // Check if it has the basic requirements of an address
    return false;
  } else if (
    /^(0x)?[0-9a-f]{40}$/.test(address) ||
    /^(0x)?[0-9A-F]{40}$/.test(address)
  ) {
    // If it's all small caps or all all caps, return true
    return true;
  } else {
    // Otherwise check each case
    return isChecksumAddress(address);
  }
};
