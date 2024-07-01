import { ethers } from "ethers";
import { useConnectWallet } from "@web3-onboard/react";
import { init } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import css from "styled-jsx/css";

const apiKey = "1730eff0-9d50-4382-a3fe-89f0d34a2070";

const injected = injectedModule();

const infuraKey = "<INFURA_KEY>";
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

init({
  apiKey,
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: 42161,
      token: "ARB-ETH",
      label: "Arbitrum One",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
    },
    {
      id: "0xa4ba",
      token: "ARB",
      label: "Arbitrum Nova",
      rpcUrl: "https://nova.arbitrum.io/rpc",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://mainnet.base.org",
    },
  ],
});
export default function ButtonCon() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  let ethersProvider;
  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  }
  return (
    <div className="bg-white flex justify-center px-8 font-black rounded-xl p-3">
      <button 
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
        style={{
          fontSize: '1.2rem', // Increase font size
          padding: '10px 20px', // Add padding for larger button
          backgroundColor: '#adff02', // Set background color (optional)
          color: '#000000', // Set text color (optional)
          borderRadius: '5px', // Add border radius for smoother corners (optional)
        }}
      >
        {connecting ? "connecting" : wallet ? "Disconnect Now" : "Connect Your Wallet"}
      </button>
    </div>
  );
}