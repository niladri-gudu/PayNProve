"use client"
import { useState, useEffect } from "react";
import { ethers } from "ethers"

import { CONTRACT_ABI } from './constants/contract'
import { CONTRACT_ADDRESS } from './constants/contract'

export default function Home() {
  const [account, setAccount] = useState<string | null>(null)
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [hasPaid, setHasPaid] = useState<boolean>(false)
  const [payers, setPayers] = useState<string[]>([])

  const loadPayers = async () => {
    if (!contract) return;

    const count = await contract.getPayersCount()
    const temp: string[] = []

    for (let i = 0 ; i < count ; i++) {
      const addr = await contract.payers(i)
      temp.push(addr)
    }
    setPayers(temp)
  }
  
  useEffect(() => {
    if (contract) {
      loadPayers()
    }
  }, [contract])

  const checkPaymentStatus = async (contractInstance: ethers.Contract, address: string) => {
    const paid = await contractInstance.paid(address)
    setHasPaid(paid)
  }

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert ("Install MetaMask!");
      return
    }

    const provider = new ethers.BrowserProvider(window.ethereum)

    const accounts = await provider.send("eth_requestAccounts", [])
    
    const signer = await provider.getSigner()
    
    const contractInstance = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    )
    
    setAccount(accounts[0])
    setContract(contractInstance)
    checkPaymentStatus(contractInstance, accounts[0])
  }

  const pay = async () => {
    if (!contract) {
      alert("Connect wallet first!")
      return
    }
    
    const tx = await contract.pay({
      value: ethers.parseEther("0.01")
    })

    await tx.wait()
    alert("Payment Successful 🎉")

    await loadPayers()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Pay<span className="text-indigo-600">n</span>Prove
          </h1>
          <p className="text-sm text-slate-500">
            Pay once. Prove forever.
          </p>
        </div>

        {/* Wallet Section */}
        <div className="border rounded-lg p-4 bg-slate-50">
          {!account ? (
            <button
              onClick={connectWallet}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Connect Wallet
            </button>
          ) : (
            <p className="text-sm text-slate-700 break-all">
              <span className="font-semibold">Connected:</span> {account}
            </p>
          )}
        </div>

        {/* Payment Section */}
        {account && (
          <div className="border rounded-lg p-4 bg-slate-50 text-center">
            {!hasPaid ? (
              <button
                onClick={pay}
                className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Pay 0.01 ETH
              </button>
            ) : (
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                ✅ Payment verified on-chain
              </span>
            )}
          </div>
        )}

        {/* Payers List */}
        <div className="border rounded-lg p-4 bg-slate-50">
          <h2 className="font-semibold text-slate-700 mb-2">
            People who paid
          </h2>

          {payers.length === 0 ? (
            <p className="text-sm text-slate-500">No payments yet</p>
          ) : (
            <ul className="space-y-1 max-h-40 overflow-y-auto text-sm">
              {payers.map((addr, index) => (
                <li
                  key={index}
                  className="bg-white border rounded px-2 py-1 break-all text-slate-700"
                >
                  {addr}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
