import './App.css'
import { mintNft, SolanaNftMetadata } from '@tatumio/tatum-solana'

function App() {
  const handleMintNft = async () => {
    const newNft = await mintNft(
      {
        from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
        fromPrivateKey:
          '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
        to: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
        metadata: new SolanaNftMetadata('Tatum', 'TTM', 'https://tatum.io/images/logo/logo.svg', 0),
      })
    console.log(newNft);
  }
  return (
    <div className="App">
      Hello
    </div>
  )
}

export default App
