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

## 🚀 Setup & Run (Local Development)

This project is split into **two parts**:

- `blockchain/` → Smart contract (Hardhat)
- `frontend/` → Next.js frontend

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/paynprove.git
cd paynprove

2️⃣ Start local blockchain (Hardhat)

Open Terminal 1:

cd blockchain
npx hardhat node

✅ This starts a local Ethereum network at
http://127.0.0.1:8545 with funded test accounts.

Keep this terminal running.
3️⃣ Deploy smart contract (local)

Open Terminal 2:

cd blockchain
npx hardhat run scripts/deploy.ts --network localhost

You will see output like:

paynprove deployed to: 0xABC123...

📌 Copy this deployed contract address — you’ll need it for the frontend.
4️⃣ Setup frontend

cd frontend

Update the contract constants:

// frontend/constants/contract.ts
export const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS_HERE";
export const CONTRACT_ABI = [...];

(ABI comes from blockchain/artifacts/ after compilation)
5️⃣ Run frontend

npm install
npm run dev

Open in browser:

👉 http://localhost:3000
🧪 How to Use

    Connect MetaMask (use Hardhat Localhost network)

    Click Pay 0.01 ETH

    See “Payment verified on-chain”

    View list of wallets that have paid

🧠 Notes

    Each wallet can pay only once

    Payment proof is stored on-chain

    Refreshing the page keeps proof intact

    Use different MetaMask accounts to test multiple users

🧾 Smart Contract Functions

    pay() → Accept ETH & record payment

    paid(address) → Check if a wallet paid

    getPayersCount() → Total payers

    payers(uint) → Get payer address

    withdraw() → Owner withdraws ETH

📡 Network Support

    ✅ Localhost (Hardhat)

    🧪 Sepolia Testnet (optional)

📄 License

UNLICENSED
