import React from 'react';

const Footer = () => (
    <footer className="flex justify-center w-full">
        <div className="font-sora w-auto px-2 md:px-5 py-5 mt-7 md:mt-15
                inline-flex justify-between md:justify-center items-center
                bg-light-gray rounded-t-lg"
        >
            <p className="text-center text-xs md:text-base font-light">
                Copyright &copy; ZTB
                {' '}
                {new Date().getFullYear()}
            </p>
        </div>
    </footer>
);

export default Footer;
