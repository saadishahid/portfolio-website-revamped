'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

interface Props {
    image: string;
    text: string;
    // position: 'left' | 'right';
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

const Card = ({ image, text }: Props) => {
    return (
        <motion.div
            className={`relative overflow-hidden p-0 flex items-center justify-center`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            style={{ transform: 'scale(0.75)' }}
        >
            <motion.div
                className="relative bg-primary rounded-lg hover:shadow-xl"
                variants={cardVariants}
                whileHover={ {scale: 1.1 }}
            >
                <Image src={image} alt={text} width={410} height={716} className="rounded-lg border-black" />
            </motion.div>
        </motion.div>
    );
};

export default Card;
