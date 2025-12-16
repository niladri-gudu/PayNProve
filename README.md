# PayNProve

PayNProve is a simple Web3 dApp that allows users to **pay ETH and prove on-chain that they have paid**.  
Anyone can verify payment status directly from the blockchain.

---

## What this dApp does

- Connect wallet using MetaMask
- Pay a fixed amount of ETH
- Store payment proof on-chain
- Verify payment status from frontend
- Publicly show list of wallets that have paid
- Only contract owner can withdraw funds

---

## Tech Stack

- Solidity
- Hardhat
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
- npm / pnpm / yarn

---

## 🚀 Setup & Run (Local Development)

The project has **two parts**:

- `blockchain/` → Smart contract (Hardhat)
- `frontend/` → Frontend (Next.js)

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

⚠️ Keep this terminal running.
3️⃣ Deploy smart contract (local)

Open Terminal 2:

cd blockchain
npx hardhat run scripts/deploy.ts --network localhost

You will see output like:

paynprove deployed to: 0xABC123...

📌 Copy this deployed contract address.
4️⃣ Setup frontend

cd frontend
npm install

Update contract constants:

// frontend/constants/contract.ts
export const CONTRACT_ADDRESS = "PASTE_DEPLOYED_ADDRESS_HERE";
export const CONTRACT_ABI = [...];

    ABI can be copied from blockchain/artifacts/ after compilation.

5️⃣ Run frontend

npm run dev

Open in browser:

👉 http://localhost:3000
🧪 How to Use

    Connect MetaMask

    Switch MetaMask to Hardhat Localhost

    Click Pay 0.01 ETH

    See Payment verified on-chain

    View list of wallets that have paid

Use different MetaMask accounts to test multiple users.
🧾 Smart Contract Functions

    pay() → Accept ETH & record payment

    paid(address) → Check if a wallet paid

    getPayersCount() → Total payers

    payers(uint) → Get payer address by index

    withdraw() → Owner withdraws ETH

📡 Network Support

    ✅ Localhost (Hardhat)

    🧪 Sepolia Testnet (optional)

📄 License

UNLICENSED
