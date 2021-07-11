import {Web3} from 'web3-react-native';

(async () => {
  const password =
    '*xH@ak46%PyWJ^TSu9sMmyYe@d*nMpCPqf2^VMHwRTXR5@%C*tvPYKv%$5zYN7jbs!zv*YaBY%FFeYtejYu@FjsZvGyT3z#HhE@';
  const {Keystore, Wallet} = await Web3(
    'https://goerli.infura.io/v3/d93ebd2ea335456fab8d17648bcc924f',
  );
  const ks = await Keystore.create(password);
  // Here, we generate a new wallet using the generated keystore.
  const {address, sendFunds} = await Wallet.create(ks, password);
})();
