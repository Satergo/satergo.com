# v1.7.0

Release date: 30 Jan 2024

- Light node support
- Chained transactions
- Sending tokens without specifying ERG
- Copy transaction ID (history)
- Total tokens in a transaction (history)
- Support for sending to stealth addresses
- Improved design

<details>
	<summary><h1 style="display: inline;">v1.6.0</h1></summary>

Release date: 31 July 2023

- DeFi/dApp support (ErgoPay)
- Installer for Windows users
- All fiat currency conversions with CoinGecko
- Button to refresh the transaction history
- VM arguments for the node. You can limit RAM, debug, etc.
- Wallets that received large transactions can now display the transaction history and do not take a few seconds to open
- Fixed the node log level functionality (it broke with an Ergo node update) which was always on level INFO and that caused freezes and lag
- Added Indonesian & Malaysian translations
- Improved screen reader support (for blind people)
- Styling fixes

</details>

<details>
	<summary><h1 style="display: inline;">v1.5.1</h1></summary>

Release date: 24 Dec 2022

- Small but important fixes
- Small design improvements

</details>

<details>
	<summary><h1 style="display: inline;">v1.5.0</h1></summary>

Release date: 24 Dec 2022

- Completely remade design (thanks to Nadi)
- Completely remade design (this is big enough to be mentioned twice)
- Derived addresses are now automatically restored
- The rare case of some wallets having different addresses in different wallet programs is handled
- Setup can be fully navigated using keyboard now
- Auto-update feature for node
- Users can load a custom stylesheet to modify the user interface design

</details>

<details>
	<summary><h1 style="display: inline;">v1.4.1</h1></summary>

Release date: 13 Aug 2022

- Fixed node updating on Windows
- Sending is now properly disallowed until the node has synced
- Added a Fetch IP button to the "Set public address" node shortcut
- Fixed renaming addresses
- Improved node updater: now shows a progress bar and writes to the log when finished
- Fixed "Change API key" and "Set public address" node shortcuts
- Fixed issue with transacting from non-master addresses
- Fixed that some data stopped updating after node restart
- Localized date formats
- Added Portuguese translation

#### Less important changes:
- Removed unnecessary prompt for when multiple node JARs are found in an already known setup
- Fixed handling of specially-crafted tokens with null decimal amount
- Explorer API can now be changed from system properties (`satergo.mainnetExplorerApi`)
- "Set public address" correctly writes IPv6 addresses (even though the node does not support reading them yet, [pull request](https://github.com/ergoplatform/ergo/pull/1806) submitted)
- Fixed transacting on testnet

</details>

<details>
	<summary><h1 style="display: inline;">v1.4.0</h1></summary>

Release date: 20 Jul 2022

- Added offline mode to manage addresses, the mnemonic and the password
- Chart excludes incorrect CoinGecko data from before mainnet started
- Sync progress now shows block progress after headers finish syncing
- Chart matches your theme
- Fixed file permissions in the downloads
- Node overview shows amount of connected peers
- Changes to node updater
- Skipped version to 1.4.0 to clarify that the program is stable

</details>

<details>
	<summary><h1 style="display: inline;">v0.0.3</h1></summary>

Release date: 22 Jun 2022

- Program is 50% smaller
- Node operations (setting API key & public address, opening .conf file, unlocking)
- Transaction history (for finished ones)
- Setting to require password for sending
- Selecting which addresses to send from
- Price chart (24h, 7d, 30d, 90d, 1y, Max)
- Optimized selection from multiple addresses
- Selecting change address
- More tasks are done in the background to not freeze the UI
- Token icons
- Navigation bar
- Content adapts to window width
- Keyboard navigation on mnemonic repetition
- Improved node downloader
- Fixed issue where adding multiple entries of the same token in one transaction was allowed (but broken)
</details>

<details>
	<summary><h1 style="display: inline;">v0.0.2</h1></summary>

Release date: 31 Dec 2021

- Sending from derived addresses
- Balance includes derived addresses
- Update checking and installing for embedded node
- Improved embedded node log
- Transaction affordance checks
- Embedded font
- Suggested remote node (for beginners)
- Copy and remove icons
- Adding derived address of specific index
- Updated translations
</details>