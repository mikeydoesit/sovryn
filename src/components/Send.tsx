import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

const Send:FC = () => {

    return (
        <>
            <div className="container max-w-sm mx-auto bg-custom-black rounded-xl shadow border p-10 m-10">
                <h2 className="text-5xl leading-none text-white font-normal mb-14 text-center uppercase">
                    Send
                </h2>
                
                <form className='w-full'>

                    {/* Asset selector */}
                    <div className='form_item w-full mb-9'>

                        <span className="form_item_title block w-full text-white text-base leading-none font-normal mb-2.5">Asset:</span>

                        <div className='form_item_select flex flex-row h-fit w-full rounded-lg border-2 border-custom-blue border-solid'>
                            <div className='form_item_select_eth w-1/2 h-auto relative py-2 px-12 border-r-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="asset" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center'>
                                    <FontAwesomeIcon icon={faEthereum} className='text-white text-2xl leading-none'/>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit ml-1.5 text-white font-normal text-base leading-none'>rEth</span>
                                </div>
                            </div>
                            <div className='form_item_select_weenus h-auto w-1/2 relative py-2 px-12 border-l-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="asset" />
                                <div className='form_item_select_wee_btn w-full h-auto flex flex-row justify-center items-center'>
                                    <i className='h-full'>&#128170;</i>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit ml-1.5 text-white font-normal text-base leading-none'>Weenus</span>
                                </div>
                            </div>
                        </div>

                        <span className='form_item_subtitle block w-full text-white text-xs leading-none font-normal mt-2.5'>Available Balance 32.00 rEth</span>
                    </div>

                    {/* Amount selector */}
                    <div className='form_item w-full mb-9'>

                        {/* Amount selector title */}
                        <span className="form_item_title block w-full text-white text-base leading-none font-normal mb-2.5">Amount:</span>

                        {/* Amount selector input */}
                        <div className='w-full relative mb-3.5'>
                            <input type='number' placeholder='0' className='w-full text-sm leading-none py-3 px-3 text-center rounded-lg appearance-none border-none focus:outline-custom-blue focus:border-custom-blue focus:shadow-none placeholder:text-custom-black' />
                            <span className='absolute w-fit h-auto text-base leading-none flex justify-center items-center top-0 right-0 bottom-0 py-3 px-3'>ETH</span>
                            <span className='absolute w-fit h-auto text-base leading-none flex justify-center items-center top-0 right-0 bottom-0 py-3 px-3 invisible'>WEENUS</span>
                        </div>
                        {/* Percentage Selector */}
                        <div className='form_item_select flex flex-row h-fit w-full rounded-lg border-2 border-custom-blue border-solid'>
                            
                            <div className='form_item_select_eth w-1/5 h-auto relative border-r-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="amount" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center py-2 '>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit text-custom-blue font-normal text-sm leading-none'>10%</span>
                                </div>
                            </div>

                            <div className='form_item_select_eth w-1/5 h-auto relative border-r-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="amount" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center py-2'>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit text-custom-blue font-normal text-sm leading-none'>25%</span>
                                </div>
                            </div>

                            <div className='form_item_select_eth w-1/5 h-auto relative border-r-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="amount" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center py-2'>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit text-custom-blue font-normal text-sm leading-none'>50%</span>
                                </div>
                            </div>

                            <div className='form_item_select_eth w-1/5 h-auto relative border-r-2 border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="amount" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center py-2'>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit text-custom-blue font-normal text-sm leading-none'>75%</span>
                                </div>
                            </div>

                            <div className='form_item_select_eth w-1/5 h-auto relative border-custom-blue flex justify-center items-center'>
                                <input className='w-full h-full absolute left-0 top-0 invisible cursor-pointer z-7' type="radio"  name="amount" />
                                <div className='form_item_select_eth_btn w-full h-auto flex flex-row justify-center items-center py-2'>
                                    <span className='form_item_select_eth_btn_text w-fit h-fit text-custom-blue font-normal text-sm leading-none'>100%</span>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* Address to send to*/}
                    <div className='form_item w-full mb-9'>
                        <span className='form_item_title block w-full text-white text-base leading-none font-normal mb-2.5'>Send To:</span>
                        <input type="text" name="sendTo" className='w-full text-sm leading-none py-3 px-3 text-center rounded-lg appearance-none focus:outline-custom-blue'/>
                    </div>

                    {/* Submit Button */}
                    <div className='submit flex justify-center items-center pb-2.5'>
                        <input className="submit_btn bg-custom-yellow uppercase rounded-lg text-xl py-4 px-14" type="submit"/>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Send