'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface Props {
    image: string;
    text: string;
    position: 'left' | 'right';
}

const cardVariants: Variants = {
    offscreen: {
        y: 1000,
    },
    onscreen: {
        y: 0,
        rotate: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1.0,
        },
    },
};

const Card = ({ image, text, position }: Props) => {
    return (
        <motion.div
            className={`relative overflow-hidden p-5 mb-12 flex items-center justify-center ${position === 'left' ? 'self-start' : 'self-end'}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div
                className="relative bg-secondary p-6 rounded-lg shadow-lg"
                variants={cardVariants}
            >
                <Image src={image} alt={text} width={410} height={716} className="mb-4 rounded-lg" />
                <div className="text-lg text-gray-700">{text}</div>
            </motion.div>
        </motion.div>
    );
};

export default Card;
