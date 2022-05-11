import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

const Review:FC = () => {

    return (
        <>
            <div className="max-w-[401px] mx-auto bg-custom-black rounded-xl shadow border p-9 m-10 flex flex-col items-center">
                <h2 className="text-2xl leading-none text-white font-normal mb-14 text-center">
                    Review Transaction
                </h2>
                
                {/* Amount sent */}
                <div className='review_amount_send w-full h-fit flex flex-col items-center mb-10'>
                    <span className='review_amount_send_method text-white text-lg leading-tight'>SEND</span>
                    <span className='review_amount_send_value text-white text-lg leading-tight'>100,000 WEENUS</span>
                </div>

                {/* Sender */}
                    <span className='review_sender_address text-white text-sm h-fit leading-none mb-7 block'>From: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>


                <div className='review_icon w-full h-fit flex justify-center items-center mb-7'>
                    <FontAwesomeIcon className='text-white h-9' icon={faCircleDown} />
                </div>


                {/* Recipient */}
                    <span className='review_recipient_address text-white text-sm h-fit leading-none mb-10 block'>To: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>

                {/* Transaction fee */}
                <div className='review_tx_fee w-full h-fit flex flex-row justify-center items-center mb-8'>
                    <span className='mr-24 text-white text-sm leading-none'>Tx Fee:</span>
                    <span className='text-white text-sm leading-none'>0.0006 rBTC</span>
                </div>

                {/* Submit Button */}
                <div className='submit flex justify-center items-center mb-2.5'>
                    <input className="submit_btn bg-custom-yellow rounded-lg text-xl py-4 px-14" type="submit" value="Confirm" />
                </div>
            </div>
        </>
    )
}

export default Review