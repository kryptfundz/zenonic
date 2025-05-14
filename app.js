  // Contract ABI (using your provided ABI)
const contractABI = [ 
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721IncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721InsufficientApproval",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721NonexistentToken",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MAX_PER_WALLET",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PRICE",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
},
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "mintingEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "safeMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "baseURI",
        "type": "string"
      }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "toggleMinting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
 ];

// Correct contract address (single 0x prefix)
const contractAddress = "0x474f2f499e446d37773c947158a8db7d92cadabc";

let provider;
let signer;
let contract;
let currentAccount = null;

// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const mintButton = document.getElementById('mintButton');
const mintedCountEl = document.getElementById('mintedCount');
const mintModal = document.getElementById('mintModal');
const closeModal = document.querySelector('.close');
const confirmMintBtn = document.getElementById('confirmMint');
const mintStatusEl = document.getElementById('mintStatus');
const mintProgressEl = document.getElementById('mintProgress');
const nftPreview = document.getElementById('nftPreview');

// Network check function
async function checkNetwork() {
    try {
        const network = await provider.getNetwork();
        if (network.chainId !== 84532n) {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x14A34" }]
                });
                return true;
            } catch (switchError) {
                console.error("Please switch to Base Sepolia");
                return false;
            }
        }
        return true;
    } catch (error) {
        console.error("Network check failed:", error);
        return false;
    }
}

// Initialize the app
async function initApp() {
    if (window.ethereum) {
        try {
            // Initialize provider
            provider = new ethers.BrowserProvider(window.ethereum, {
                name: "baseSepolia",
                chainId: 84532,
                ensAddress: null
            });
            
            // Check network
            if (!await checkNetwork()) {
                alert("Please switch to Base Sepolia network");
                return;
            }
            
            // Initialize contract
            signer = await provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            
            // Check connection
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                currentAccount = accounts[0];
                await updateUI();
            }
            
            // Load contract data
            await loadContractData();
            
            // Set up event listeners
            window.ethereum.on('accountsChanged', (accounts) => {
                currentAccount = accounts.length > 0 ? accounts[0] : null;
                updateUI();
            });
            
            window.ethereum.on('chainChanged', () => {
                window.location.reload();
            });
            
        } catch (error) {
            console.error("Initialization error:", error);
        }
    } else {
        alert('Please install MetaMask or another Ethereum wallet to use this dApp!');
    }
}

// Update UI based on connection state
async function updateUI() {
    try {
        if (currentAccount) {
            connectWalletBtn.textContent = truncateAddress(currentAccount);
            mintButton.disabled = false;
            
            // Check if user already owns an NFT
            const balance = await contract.balanceOf(currentAccount);
            if (balance > 0) {
                mintButton.textContent = 'Already Minted';
                mintButton.disabled = true;
            } else {
                mintButton.textContent = `Mint for ${ethers.formatEther(await contract.PRICE())} ETH`;
                mintButton.disabled = false;
            }
        } else {
            connectWalletBtn.textContent = 'Connect Wallet';
            mintButton.disabled = true;
        }
    } catch (error) {
        console.error("UI update error:", error);
    }
}

// Load contract data
async function loadContractData() {
    try {
        if (!contract) throw new Error("Contract not initialized");
        
        const [totalSupply, price] = await Promise.all([
            contract.totalSupply(),
            contract.PRICE()
        ]);
        
        mintedCountEl.textContent = totalSupply.toString();
        mintButton.textContent = `Mint for ${ethers.formatEther(price)} ETH`;
    } catch (error) {
        console.error('Error loading contract data:', error);
    }
}

// Connect wallet handler
connectWalletBtn.addEventListener('click', async () => {
    if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        currentAccount = accounts[0];
        await updateUI();
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
});

// Mint button handler
mintButton.addEventListener('click', () => {
    mintModal.style.display = 'block';
    mintStatusEl.textContent = 'Ready to mint your exclusive Zenon Founders Pass NFT.';
    mintProgressEl.style.width = '0%';
});

// Close modal handler
closeModal.addEventListener('click', () => {
    mintModal.style.display = 'none';
});

// Confirm mint handler
confirmMintBtn.addEventListener('click', async () => {
    if (!currentAccount) {
        alert('Please connect your wallet first!');
        return;
    }
    
    try {
        if (!await checkNetwork()) {
            mintStatusEl.textContent = "Please switch to Base Sepolia";
            return;
        }

        mintStatusEl.textContent = 'Processing transaction...';
        mintProgressEl.style.width = '30%';
        
        // Get mint price from contract
        const price = await contract.PRICE();
        
        // Estimate gas first
        try {
            await contract.safeMint.estimateGas(currentAccount, { value: price });
        } catch (estimateError) {
            console.error("Gas estimate failed:", estimateError);
            mintStatusEl.textContent = "Mint failed: " + (estimateError.reason || estimateError.message);
            return;
        }
        
        // Call the mint function
        const tx = await contract.safeMint(currentAccount, { value: price });
        mintStatusEl.textContent = 'Transaction submitted. Waiting for confirmation...';
        mintProgressEl.style.width = '60%';
        
        // Wait for transaction to be mined
        const receipt = await tx.wait();
        mintStatusEl.textContent = 'Transaction confirmed! Minting your NFT...';
        mintProgressEl.style.width = '90%';
        
        // Check for Transfer event
        const transferEvent = receipt.logs?.find(log => 
            log.topics[0] === ethers.id("Transfer(address,address,uint256)")
        );
        
        if (transferEvent) {
            mintStatusEl.textContent = 'Success! Your Zenon Founders Pass has been minted.';
            mintProgressEl.style.width = '100%';
            
            // Update UI
            await updateUI();
            await loadContractData();
            
            // Close modal after 3 seconds
            setTimeout(() => {
                mintModal.style.display = 'none';
            }, 3000);
        } else {
            throw new Error('Mint completed but no Transfer event found');
        }
    } catch (error) {
        console.error('Error minting NFT:', error);
        let errorMessage = error.message;
        
        if (error.code === "ACTION_REJECTED") {
            errorMessage = "Transaction rejected by user";
        } else if (error.info?.error) {
            errorMessage = error.info.error.message;
        } else if (error.reason) {
            errorMessage = error.reason;
        }
        
        mintStatusEl.textContent = `Error: ${errorMessage}`;
        mintProgressEl.style.width = '0%';
    }
});

// Helper function to truncate address
function truncateAddress(address) {
    return address ? `${address.substring(0, 6)}...${address.substring(address.length - 4)}` : '';
}

// Initialize the app when the page loads
window.addEventListener('load', initApp);