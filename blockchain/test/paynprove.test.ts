import { expect } from 'chai'
import { network } from 'hardhat'

describe("pay", () => {
    async function deployFixture() {
        const { ethers } = await network.connect()

        const [owner, user] = await ethers.getSigners()

        const contract = await ethers.deployContract('paynprove')
        await contract.waitForDeployment() 

        return { contract, owner, user, ethers }
    }

    it ("reverts if 0 ETH is sent", async () => {
        const { contract, user } = await deployFixture()

        await expect(
            contract.connect(user).pay({ value: 0 })
        ).to.be.revertedWith("Must send ETH")
    })

    it ("marks user as paid when ETH is sent", async () => {
        const { contract, user, ethers } = await deployFixture()

        await contract.connect(user).pay({
            value: ethers.parseEther("1")
        })

        const paid = await contract.paid(user.address)
        expect(paid).to.equal(true)
    })

    it ("reverts if user pays twice", async () => {
        const { contract, user, ethers } = await deployFixture()

        await contract.connect(user).pay({
            value: ethers.parseEther("1")
        })

        await expect(
            contract.connect(user).pay({
                value: ethers.parseEther("1")
            })
        ).to.be.revertedWith("Already paid!")
    })
})

describe("withdraw", () => {
    async function deployFixture() {
        const { ethers } = await network.connect()

        const [owner, user] = await ethers.getSigners()

        const contract = await ethers.deployContract("paynprove")
        await contract.waitForDeployment()

        return { contract, user, owner, ethers }
    }

    it ("Only owner can withdraw", async () => {
        const { contract, user } = await deployFixture()

        await expect(
            contract.connect(user).withdraw()
        ).to.be.revertedWith("Only owner can call this function")
    })

    it ("Updates the owner's balance and empty's contract", async () => {
        const { contract, user, ethers, owner } = await deployFixture()

        await contract.connect(user).pay({
            value: ethers.parseEther("1")
        })

        const ownerBalanceBefore = await ethers.provider.getBalance(owner.address)

        const tx = await contract.connect(owner).withdraw()
        await tx.wait()

        const ownerBalanceAfter = await ethers.provider.getBalance(owner.address)

        const contractBalance = await ethers.provider.getBalance(await contract.getAddress())

        expect(contractBalance).to.equal(0n)
        expect(ownerBalanceAfter).to.be.greaterThan(ownerBalanceBefore)
    })
})