import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const Confirm:FC = () => {

    return (
        <>
            <div className="max-w-[401px] mx-auto bg-custom-black rounded-xl shadow border p-9 m-10 flex flex-col items-center">
                <h2 className="text-2xl leading-none text-white font-normal mb-14 text-center">
                    Transaction Details
                </h2>
                
                {/* Transaction Status*/}
                <div className='confirm_tx_status w-full h-fit flex flex-col items-center mb-10'>
                    <FontAwesomeIcon className='text-white h-16 text-custom-green' icon={faCircleCheck} />
                    <span className='confirm_tx_status_value text-white text-lg leading-none italic'>Status Pending</span>
                </div>

                {/* Transaction fee */}
                <div className='confirm_tx_status w-full h-fit flex flex-row justify-center items-center mb-8'>
                    <span className='mr-6 text-white text-sm leading-none'>Tx Hash:</span>
                    <span className='text-custom-yellow text-sm leading-none'>0x410x4133…890x413413</span>
                </div>

                {/* Submit Button */}
                <div className='submit flex justify-center items-center mb-2.5'>
                    <input className="submit_btn bg-custom-yellow rounded-lg text-xl py-4 px-14" type="submit" value="Confirm" />
                </div>
            </div>
        </>
    )
}

export default Confirm