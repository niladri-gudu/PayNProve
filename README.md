# PayNProve

PayNProve is a simple Web3 dApp that allows users to **pay ETH and prove on-chain that they have paid**.  
Anyone can verify payment status directly from the blockchain.

---

## What this dApp does

- Users connect their wallet (MetaMask)
- Users pay a fixed amount of ETH
- Smart contract permanently records payment
- Frontend verifies payment on-chain
- List of all paying wallets is publicly visible
- Only the contract owner can withdraw funds

---

## Tech Stack

- Solidity
- Hardhat (local blockchain & deployment)
- Ethers.js
- Next.js (App Router)
- React
- TypeScript

---

## Project Structure

paynprove/
│
├── blockchain/ # Smart contracts + Hardhat
│ ├── contracts/
│ ├── scripts/
│ ├── test/
│ └── hardhat.config.ts
│
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── constants/
│ └── package.json


---

## Prerequisites

- Node.js (v18+ recommended)
- MetaMask browser extension
- pnpm / npm / yarn

---

## Setup & Run (Local)

### 1️⃣ Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/paynprove.git
cd paynprove

2️⃣ Run local blockchain

cd blockchain
npx hardhat node

Keep this terminal running.
3️⃣ Deploy smart contract (local)

Open a new terminal:

cd blockchain
npx hardhat run scripts/deploy.ts --network localhost

Copy the deployed contract address.
4️⃣ Setup frontend

cd frontend

Update these files:

// constants/contract.ts
export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS";
export const CONTRACT_ABI = [...];

5️⃣ Run frontend

npm run dev

Open:

http://localhost:3000

How to use

    Connect MetaMask

    Pay ETH

    See “Payment verified on-chain”

    View list of wallets that paid

Smart Contract Features

    pay() → Accepts ETH and records payment

    paid(address) → Checks if a wallet paid

    getPayersCount() → Total payers

    payers(uint) → Get payer address by index

    withdraw() → Owner withdraws ETH

Network Support

    Localhost (Hardhat)

    Sepolia Testnet (optional)

License

UNLICENSED
