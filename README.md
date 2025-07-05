# TON NFT Collection Project

## Table of Contents

1. [What are NFTs?](#what-are-nfts)
2. [TEP Standard for NFTs on TON](#tep-standard-for-nfts-on-ton)
3. [NFT Gifts, Stickers, and Tokens](#nft-gifts-stickers-and-tokens)
4. [Smart Contracts Overview](#smart-contracts-overview)
5. [NFT Collection Contract](#nft-collection-contract)
6. [NFT Item Contract](#nft-item-contract)
7. [Project Structure](#project-structure)
8. [How to Use](#how-to-use)

---

## What are NFTs?

**NFTs (Non-Fungible Tokens)** are unique digital assets that represent ownership of a specific item or piece of content on a blockchain. Unlike cryptocurrencies like Bitcoin or TON, which are fungible (interchangeable), each NFT has distinct characteristics that make it one-of-a-kind.

### Key Characteristics of NFTs:

- **Uniqueness**: Each NFT has a unique identifier and cannot be replicated
- **Indivisibility**: NFTs cannot be divided into smaller units
- **Ownership**: Clear, verifiable ownership recorded on the blockchain
- **Metadata**: Contains information about the asset (images, descriptions, attributes)
- **Transferability**: Can be bought, sold, or transferred between users

### Common Use Cases:
- Digital art and collectibles
- Gaming items and virtual real estate
- Music and video content
- Identity and certification documents
- Event tickets and memberships

---

## TEP Standard for NFTs on TON

The **TON Enhancement Proposal (TEP)** standard for NFTs on The Open Network defines a standardized way to implement non-fungible tokens. This project implements the TEP-62 standard, which provides:

### TEP-62 Standard Features:

1. **Standardized Interface**: Common methods for all NFT contracts
2. **Transfer Mechanism**: Secure ownership transfer between addresses
3. **Metadata Support**: Structured data storage for NFT information
4. **Royalty System**: Automatic royalty distribution to creators
5. **Collection Management**: Organized grouping of related NFTs

### Collection Metadata
```typescript
{
   "image": "https://ton.org/_next/static/media/smart-challenge1.7210ca54.png",
   "name": "TON Smart Challenge #2",
   "description": "TON Smart Challenge #2 Winners Trophy",
   "social_links": []
}
```

### NFTItem metadata
```typescript
{
   "name": "TON Smart Challenge #2 Winners Trophy",
   "description": "TON Smart Challenge #2 Winners Trophy 1 place out of 181",
   "image": "https://ton.org/_next/static/media/duck.d936efd9.png",
   "content_url": "https://ton.org/_next/static/media/dimond_1_VP9.29bcaf8e.webm",
   "attributes": []
}
```

### Core Components:
- **Collection Contract**: Manages the overall NFT collection
- **Item Contract**: Individual NFT instances
- **Message Standards**: Defined message types for interactions
- **Data Structures**: Consistent data formats across contracts

---

## NFT Gifts, Stickers, and Tokens

| NFT Type | Description | Key Features | Use Cases |
|----------|-------------|--------------|-----------|
| **NFT Gifts** | Special digital tokens sent as presents between users | • Customizable Messages<br>• Limited Editions<br>• Social Features<br>• Animation Effects | • Personal gifting<br>• Seasonal collections<br>• Social interactions<br>• Digital celebrations |
| **NFT Stickers** | Digital stickers for messaging platforms and social media | • Emoji-like Assets<br>• Platform Integration<br>• Collection Sets<br>• Trading Cards | • Messaging apps<br>• Social media posts<br>• Collectible series<br>• Digital expression |
| **NFT Tokens** | General-purpose digital tokens with specific use cases | • Utility Tokens<br>• Governance Tokens<br>• Reward Tokens<br>• Membership Tokens | • Service access<br>• Voting rights<br>• Platform incentives<br>• Exclusive communities |

### Detailed Comparison Table

| **Feature** | **NFT (Non-Fungible Token)** | **SBT (Soulbound Token)** | **Stickers** | **Gifts** |
| --- | --- | --- | --- | --- |
| **Definition** | Unique digital assets on the TON blockchain representing ownership of items like art, collectibles, or virtual goods. | Non-transferable tokens bound to a specific wallet, representing identity, credentials, or achievements. Not explicitly standardized in TON but conceptually applicable. | Digital images or animations used in Telegram chats, often tokenized as NFTs or managed as collectibles in TON.<br>Connected to Emojis for better usability. | Limited-edition digital items sent via Telegram, often with a time limit to claim, convertible to TON-based NFTs or other assets. |
| **Transferability** | Fully transferable; can be bought, sold, or traded on TON marketplaces like Getgems or Disintar. | Non-transferable; permanently linked to the issuing wallet (if implemented in TON, would restrict transfers via smart contracts). | Varies; some are freely usable, others are tokenized as NFTs and transferable, depending on the sticker pack. | Initially non-transferable until claimed; some can be converted to transferable NFTs after claiming. |
| **Monetary Value** | Holds monetary value based on market demand; often traded for TON coins. | No monetary value; designed for non-financial utility like reputation or proof of achievement. | Limited monetary value; premium or tokenized sticker packs may be sold as NFTs, but most are free or low-cost. | May have monetary value if converted to NFTs; otherwise, primarily sentimental or promotional. |
| **Use Case in TON** | • Digital art and collectibles (e.g., TON Punks).<br>• Profile pictures or avatars.<br>• In-game assets in TON-based games. | • Potential for KYC verification (e.g., similar to Binance's BAB token).<br>• Proof of attendance at TON events.<br>• Digital credentials or DAO membership (if adopted). | • Enhancing Telegram chats with custom visuals.<br>• Collectible sticker packs sold as NFTs (e.g., premium Telegram sticker sets). | • Sending limited-edition digital gifts via Telegram (e.g., for promotions or events).<br>• Conversion to NFTs for trading or collection. |
| **Storage** | Stored in TON wallets (e.g., Tonkeeper) as standard Jettons or NFTs. | Stored in a TON wallet but locked to prevent transfer (if implemented, would use custom smart contracts). | Stored in Telegram's sticker library; tokenized stickers stored in TON wallets as NFTs. | Stored in Telegram's gift section until claimed; convertible gifts stored as NFTs in TON wallets. |
| **Creation/Minting** | Minted on TON blockchain using platforms like Getgems or custom smart contracts; follows TON's NFT standards. | Minted with smart contracts disabling transfer functions (not yet common in TON but feasible). | Bought via Stickers bot as NFTs on TON. | Issued by Telegram or partners as promotional items; conversion to NFTs handled by TON smart contracts. |
| **Examples in TON** | • TON Punks, Egg Fight NFTs.<br>• Anonymous Telegram Numbers (linked to phone numbers). | • Hypothetical: TON-based KYC tokens or event badges (no prominent examples yet). | • Telegram's animated sticker packs.<br>• Tokenized sticker sets sold on Getgems. | • Telegram Stars gifts.<br>• Limited-edition event gifts convertible to NFTs. |
| **Interoperability** | Compatible with TON marketplaces and potentially other blockchains via bridges. | Limited interoperability due to non-transferability; specific to issuing entity's ecosystem (if implemented). | Limited to Telegram unless tokenized as NFTs, then compatible with TON marketplaces. | Limited to Telegram until converted to NFTs, then compatible with TON marketplaces. |
| **Revocability** | Generally not revocable unless specified in the smart contract. | Potentially revocable by the issuer (e.g., for credentials); depends on smart contract design. | Not revocable for standard stickers; tokenized stickers follow NFT rules. | May expire if not claimed within a time limit; converted NFTs follow standard NFT rules. |
| **Privacy** | Publicly visible on the blockchain; ownership traceable unless anonymized. | Can be public or private depending on implementation; sensitive data may require privacy solutions. | Public within Telegram chats; tokenized stickers have public blockchain records. | Private until claimed; NFT-converted gifts have public blockchain records. |

---

## Smart Contracts Overview

This project implements a complete NFT system with two main contracts:

1. **NFT Collection Contract** (`NftCollection`): Manages the overall collection
2. **NFT Item Contract** (`NftItem`): Individual NFT instances

The contracts follow TEP-62 standards and provide full NFT functionality including minting, transferring, and royalty management.

---

## NFT Collection Contract

The `NftCollection` contract serves as the main controller for the entire NFT collection.

### Contract Structure

```typescript
contract NftCollection {
    next_item_index: Int as uint32 = 0;
    owner_address: Address;
    royalty_params: RoyaltyParams;
    collection_content: Cell;
}
```

### Key Receivers and Functions

#### 1. Mint Receiver
```typescript
receive("Mint") {
    // Handles NFT minting requests
}
```

**Purpose**: Allows users to mint new NFTs in the collection
- **Gas Management**: Calculates and reserves gas for operations
- **Storage Fees**: Ensures sufficient balance for storage costs
- **Sequential Minting**: Maintains order with `next_item_index`

**Use Case**: When a user wants to create a new NFT in the collection

#### 2. GetRoyaltyParams Receiver
```typescript
receive(msg: GetRoyaltyParams) {
    // Responds with royalty information
}
```

**Purpose**: Provides royalty information to other contracts
- **Query Response**: Returns royalty parameters to requesting contracts
- **Standard Compliance**: Follows TEP-62 royalty standards
- **Creator Protection**: Ensures creators receive fair compensation

**Use Case**: Marketplaces or other contracts need royalty information for sales

#### 3. Get Functions

**get_collection_data()**
- Returns collection metadata and statistics
- Includes next item index, content, and owner address
- Used by marketplaces and explorers

**get_nft_address_by_index(item_index: Int)**
- Calculates the address of a specific NFT by its index
- Enables direct NFT lookup without storing all addresses

**getNftItemInit(item_index: Int)**
- Creates initialization data for new NFT items
- Ensures consistent NFT creation across the collection

**get_nft_content(index: Int, individual_content: Cell)**
- Combines collection and individual NFT metadata
- Provides complete NFT information

**royalty_params()**
- Returns current royalty configuration
- Used for royalty calculations in sales

### Storage Management
- **Minimum Storage**: 0.03 TON for contract operations
- **Gas Consumption**: 0.03 TON for various operations
- **Balance Tracking**: Monitors contract balance for fee calculations

---

## NFT Item Contract

The `NftItem` contract represents individual NFT instances within the collection.

### Contract Structure

```typescript
contract NFTItem() {
    // Minimal structure for gas optimization
}
```

### Key Receivers and Functions

#### 1. Default Receiver
```typescript
receive() {
    // Handles deployment and cashback
}
```

**Purpose**: Handles contract deployment and value management
- **Deployment**: Processes initial contract deployment
- **Cashback**: Returns excess value to sender
- **Gas Optimization**: Minimal structure for cost efficiency

**Use Case**: When the contract is first deployed or receives unexpected messages

### Message Types

#### Transfer Message
```typescript
message(0x5fcc3d14) Transfer {
    query_id: Int as uint64;
    new_owner: Address;
    response_destination: Address;
    custom_payload: Cell?;
    forward_amount: Int as coins;
    forward_payload: Slice as remaining;
}
```

**Purpose**: Transfers NFT ownership to a new address
- **Ownership Change**: Updates NFT owner
- **Custom Payload**: Allows additional data in transfer
- **Forward Mechanism**: Supports complex transfer scenarios

#### OwnershipAssigned Message
```typescript
message(0x05138d91) OwnershipAssigned {
    query_id: Int as uint64;
    prev_owner: Address;
    forward_payload: Slice as remaining;
}
```

**Purpose**: Confirms ownership transfer completion
- **Transfer Confirmation**: Notifies about successful transfers
- **Previous Owner**: Records the previous owner address
- **Payload Forwarding**: Carries additional transfer data

#### Excesses Message
```typescript
message(0xd53276db) Excesses {
    query_id: Int as uint64;
}
```

**Purpose**: Handles excess value in operations
- **Value Management**: Returns unused TON to sender
- **Gas Optimization**: Prevents value loss in operations

#### GetStaticData Message
```typescript
message(0x2fcb26a2) GetStaticData {
    query_id: Int as uint64;
}
```

**Purpose**: Requests static NFT data
- **Data Queries**: Retrieves NFT metadata
- **Standard Compliance**: Follows TEP-62 data standards

#### ReportStaticData Message
```typescript
message(0x8b771735) ReportStaticData {
    query_id: Int as uint64;
    index_id: Int;
    collection: Address;
}
```

**Purpose**: Reports NFT static data
- **Data Response**: Provides NFT information
- **Index Tracking**: Includes NFT index in collection
- **Collection Reference**: Links to parent collection

### Data Structures

#### GetNftData Structure
```typescript
struct GetNftData {
    is_initialized: Bool;
    index: Int;
    collection_address: Address;
    owner_address: Address;
    individual_content: Cell;
}
```

**Purpose**: Comprehensive NFT data representation
- **Initialization Status**: Tracks if NFT is properly set up
- **Index**: Position in collection
- **Collection Address**: Parent collection reference
- **Owner Address**: Current NFT owner
- **Individual Content**: Unique NFT metadata

---

## Project Structure

```
session-3/
├── contracts/
│   ├── NFTCollection/
│   │   ├── messages.tact      # Collection message definitions
│   │   ├── n_f_t_collection.tact  # Main collection contract
│   │   └── structs.tact       # Collection data structures
│   └── NFTItem/
│       ├── messages.tact       # Item message definitions
│       ├── n_f_t_item.tact    # Individual NFT contract
│       └── structs.tact        # Item data structures
├── scripts/
│   ├── deployNFTCollection.ts # Collection deployment script
│   └── deployNFTItem.ts       # Item deployment script
├── tests/
│   ├── NFTCollection.spec.ts  # Collection contract tests
│   └── NFTItem.spec.ts        # Item contract tests
└── README.md                  # This documentation
```

---

## How to Use

### Prerequisites
- Node.js and npm/yarn installed
- TON development environment set up
- Tact compiler installed

### Build

```bash
npx blueprint build
# or
yarn blueprint build
```

### Test

```bash
npx blueprint test
# or
yarn blueprint test
```

### Deploy or Run Scripts

```bash
npx blueprint run
# or
yarn blueprint run
```

### Add a New Contract

```bash
npx blueprint create ContractName
# or
yarn blueprint create ContractName
```

### Deployment Process

1. **Deploy Collection**: Use `deployNFTCollection.ts` to deploy the main collection
2. **Configure Parameters**: Set owner address, content, and royalty parameters
3. **Mint NFTs**: Use the "Mint" message to create new NFTs
4. **Manage Collection**: Use getter functions to query collection data

### Testing

The project includes comprehensive tests for both contracts:
- **NFTCollection.spec.ts**: Tests collection functionality
- **NFTItem.spec.ts**: Tests individual NFT operations

Run tests to ensure contracts work correctly before deployment.

---


## License

MIT
