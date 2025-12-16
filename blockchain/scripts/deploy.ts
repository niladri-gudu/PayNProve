import { network } from "hardhat";

async function main() {
  const { ethers, networkName } = await network.connect();

  console.log(`Deploying Counter to ${networkName}...`);

  const contract = await ethers.deployContract("paynprove");

  console.log("Waiting for deployment to complete...");
  await contract.waitForDeployment();

  console.log("Counter address:", await contract.getAddress());
  console.log("Deployment successful!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log("An error occured", error);
    process.exit(1);
  });
