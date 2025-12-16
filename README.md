# PayNProve: On-Chain Payment Verification dApp

PayNProve is a simple Web3 Decentralized Application (dApp) that allows users to **pay a fixed amount of ETH and prove on-chain that they have paid**.

Anyone can verify a payment status directly from the blockchain, making the process transparent and immutable.

---

## 💡 What this dApp Does

* **Wallet Connection:** Users connect their Web3 wallet (e.g., MetaMask).
* **On-Chain Payment:** Users pay a fixed amount of ETH, which is sent to the smart contract.
* **Permanent Record:** The smart contract permanently records the payment against the user's wallet address.
* **Verification:** The frontend verifies the payment status directly on the blockchain.
* **Public Visibility:** A public list of all paying wallet addresses is visible on the frontend.
* **Owner Withdrawal:** Only the contract owner is authorized to withdraw the accumulated funds. 

---

## 🛠️ Tech Stack

This project is built using a modern Web3 development stack:

* **Smart Contracts:** [Solidity](https://soliditylang.org/)
* **Development Environment:** [Hardhat](https://hardhat.org/) (for local blockchain, compilation, and deployment)
* **Web3 Library:** [Ethers.js](https://docs.ethers.org/) (for interacting with the contract)
* **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router)
* **UI Library:** [React](https://reactjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

paynprove/ │ ├── blockchain/ # Smart contracts, Hardhat configuration, scripts, and tests │ ├── contracts/ # Your Solidity contract files (.sol) │ ├── scripts/ # Deployment scripts │ ├── test/ # Contract test files │ └── hardhat.config.ts # Hardhat configuration │ ├── frontend/ # Next.js application │ ├── app/ # Main application files (pages, components) │ ├── constants/ # Contract address, ABI, and other constants │ └── package.json


---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js:** (v18+ recommended)
* **Wallet Extension:** [MetaMask](https://metamask.io/) browser extension
* **Package Manager:** pnpm / npm / yarn (commands below use `npm`)

---

## 🚀 Setup & Run (Local Development)

Follow these steps to set up and run the dApp on a local Hardhat network.

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/paynprove.git](https://github.com/YOUR_USERNAME/paynprove.git)
cd paynprove

2️⃣ Run Local Blockchain

Start a local Hardhat node. This simulates a live blockchain network.
Bash

cd blockchain
npx hardhat node

    Note: Keep this terminal window open. It is running your local network.

3️⃣ Deploy Smart Contract

Open a new terminal window and deploy the contract to your running local network.
Bash

cd blockchain
npx hardhat run scripts/deploy.ts --network localhost

❗️ IMPORTANT: Copy the deployed contract address from the terminal output.
4️⃣ Setup Frontend

Navigate to the frontend directory and install dependencies.
Bash

cd frontend
npm install

Now, update the contract details in the frontend:

Open frontend/constants/contract.ts and replace "YOUR_DEPLOYED_ADDRESS" with the address you copied in the previous step. The CONTRACT_ABI will also need to be pasted here from your Hardhat build artifacts.
TypeScript

// frontend/constants/contract.ts

export const CONTRACT_ADDRESS = "YOUR_DEPLOYED_ADDRESS_HERE"; // PASTE ADDRESS HERE
export const CONTRACT_ABI = [...]; // PASTE ABI HERE

5️⃣ Run Frontend

Start the Next.js development server:
Bash

npm run dev

Open your browser and navigate to:

http://localhost:3000

💻 How to Use the dApp

    Connect MetaMask: Use the button to connect your MetaMask wallet to the dApp.

    Pay ETH: Initiate the payment transaction via the frontend. Confirm the transaction in MetaMask.

    Verify: After the transaction is mined (which is instant on the local network), the dApp will confirm "Payment verified on-chain."

    View Payers: Your wallet address will appear in the public list of paying wallets.

✍️ Smart Contract Features
Function	Type	Description
pay()	Payable	Accepts ETH payment and permanently records the payer's address.
paid(address)	View	Checks and returns a boolean indicating if a specific wallet address has paid.
getPayersCount()	View	Returns the total number of unique wallets that have paid.
payers(uint)	View	Allows retrieval of a payer's address by their index in the list.
withdraw()	Owner-Only	Allows the contract owner to withdraw all accumulated ETH.

🌐 Network Support

    Localhost: Hardhat development network (Primary Setup).

📜 License

This project is released under the UNLICENSED designation.
