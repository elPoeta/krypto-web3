
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
  return transactionsContract;
};


export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');

  const isWalletConnectd = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log('No accounts fond')
      }

    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install Metamask');
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error('No ethereum object');
    }
  }

  const handleChange = (e, name) => {

  };

  useEffect(() => {
    isWalletConnectd();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, handleChange, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  )
}