# PayNProve

PayNProve is a simple Web3 dApp that allows users to **pay ETH and prove on-chain that they have paid**.  
Anyone can verify payment status directly from the blockchain.

---

## 📖 Overview

PayNProve enables trustless payment verification by recording payments directly on-chain.  
Once a user pays, anyone can publicly verify that payment without relying on a backend server.

---

## ✨ Features

- Connect wallet using MetaMask
- Pay a fixed amount of ETH
- Store payment proof on-chain
- Verify payment status from the frontend
- Publicly display a list of wallets that have paid
- Only the contract owner can withdraw funds

---

## 🛠 Tech Stack

- **Solidity** – Smart contracts
- **Hardhat** – Development & testing
- **Ethers.js** – Blockchain interaction
- **Next.js (App Router)** – Frontend framework
- **React**
- **TypeScript**

---

## 📁 Project Structure

```text
paynprove/
│
├── blockchain/          # Smart contracts + Hardhat
│   ├── contracts/
│   ├── scripts/
│   ├── test/
│   └── hardhat.config.ts
│
├── frontend/            # Next.js frontend
│   ├── app/
│   ├── constants/
│   └── package.json

✅ Prerequisites

    Node.js v18+ (recommended)

    MetaMask browser extension

    npm / pnpm / yarn

🚀 Setup & Run (Local Development)

This project has two parts:

    blockchain/ → Smart contracts (Hardhat)

    frontend/ → Frontend (Next.js)

1️⃣ Clone the Repository

git clone https://github.com/YOUR_USERNAME/paynprove.git
cd paynprove

2️⃣ Start Local Blockchain (Hardhat)

Terminal 1:

cd blockchain
npx hardhat node

✅ Starts a local Ethereum network at http://127.0.0.1:8545 with funded test accounts.
⚠️ Keep this terminal running.
3️⃣ Deploy Smart Contract (Local)

Terminal 2:

cd blockchain
npx hardhat run scripts/deploy.ts --network localhost

Example output:

PayNProve deployed to: 0xABC123...

📌 Copy this deployed contract address.
4️⃣ Setup Frontend

cd frontend
npm install

Update contract constants in frontend/constants/contract.ts:

export const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS_HERE";
export const CONTRACT_ABI = [...]; // Copy from blockchain/artifacts after compilation

5️⃣ Run the Frontend

npm run dev

👉 Open http://localhost:3000
🧪 How to Use

    Connect MetaMask

    Switch MetaMask to Hardhat Localhost
    (http://127.0.0.1:8545)

    Click Pay 0.01 ETH

    Payment is recorded and verified on-chain

    View the public list of wallets that have paid

💡 Use different MetaMask accounts to test multiple users.
🧾 Smart Contract Functions

    pay() → Accept ETH & record payment

    paid(address) → Check if a wallet has paid

    getPayersCount() → Total number of payers

    payers(uint) → Get payer address by index

    withdraw() → Owner withdraws collected ETH

📡 Network Support

    ✅ Localhost (Hardhat)

    🧪 Sepolia Testnet (optional)

📄 License

UNLICENSED
