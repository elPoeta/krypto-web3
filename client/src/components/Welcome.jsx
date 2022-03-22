import { KeyIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { Loader } from './';

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          <button
            type="button"
            onClick={() => { }}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <KeyIcon className="h-5 w-5 text-white mr-2" />
            <p className="text-white text-base font-semibold">
              Connect Wallet
            </p>
          </button>


          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <svg width="24" height="24" viewBox="0 0 256 417" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path fill="#fff" d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" />
                    <path fill="#fff" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                    <path fill="#fff" d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" />
                    <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z" />
                    <path fill="#fff" d="M127.961 287.958l127.96-75.637-127.96-58.162z" />
                    <path fill="#fff" d="M0 212.32l127.96 75.638v-133.8z" />
                  </svg>
                </div>
                <InformationCircleIcon className='h-5 w-5' color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">

                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => { }} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => { }} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => { }} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={() => { }} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={() => { }}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Welcome