'use client';
import PaymentCard from '@/app/pages/My-bank/PaymentCard';
import { useState, useEffect, useRef } from 'react';

const MyBank: React.FC = () => {
    return(
        <div className='w-full hscreen'>
            <PaymentCard/>
        </div>
    )
}
export default MyBank;