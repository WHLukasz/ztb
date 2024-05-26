import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const Header = () => {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center">
                                    <p className="text-lg font-bold">tel. 048 612 59 10</p>
                                </div>
                            </div>
                            <div className="hidden md:flex space-x-8 items-center justify-center absolute top-0 left-0 right-0 text-center">
                                <Link
                                    to="/"
                                    className={`text-xl inline-block mx-4 my-2 text-outline nav-link ${location.pathname === '/' ? 'active' : ''
                                        }`}
                                >
                                    Strona Główna
                                </Link>
                                <Link
                                    to="/uslugi"
                                    className={`text-xl inline-block mx-4 my-2 text-outline nav-link ${location.pathname.startsWith('/uslugi') ? 'active' : ''
                                        }`}
                                >
                                    Usługi
                                </Link>
                                <Link
                                    to="/o-nas"
                                    className={`text-xl inline-block mx-4 my-2 text-outline nav-link ${location.pathname === '/o-nas' ? 'active' : ''
                                        }`}
                                >
                                    O Nas
                                </Link>
                                {/* <Link
                                    to="/kontakt"
                                    className={`text-xl inline-block mx-4 my-2 text-outline nav-link ${location.pathname === '/kontakt' ? 'active' : ''
                                        }`}
                                >
                                    Kontakt
                                </Link> */}
                            </div>
                            <div className="flex md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden bg-blue-50">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className={`block text-center text-lg font-medium text-gray-700 bg-blue-50`}
                            >
                                Strona Główna
                            </Link>
                            <Link
                                to="/uslugi"
                                className={`block text-center text-lg font-medium text-gray-700 bg-blue-100`}
                            >
                                Usługi
                            </Link>
                            <Link
                                to="/o-nas"
                                className={`block text-center text-lg font-medium text-gray-700 bg-blue-50`}
                            >
                                O Nas
                            </Link>
                            {/* <Link
                                to="/kontakt"
                                className={`block text-lg font-medium text-gray-700 hover:text-indigo-600 bg-blue-400 hover:bg-blue-500`}
                            >
                                Kontakt
                            </Link> */}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
