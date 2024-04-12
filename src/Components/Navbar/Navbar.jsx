import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import logo from '../../Data/Logo.png'
const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Log In', href: '/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Gesture"
                  />
                  <div>
                    <Link to="/" className='text-purple-600 font-bold text-lg'> Gesture</Link>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-1">
                    {/* {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium text-lg'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))} */}
                    <Link to="/" className='hover:bg-gray-700 rounded-md py-2 text-white mt-1 font-medium p-5 '>Dashboard</Link>
                    <Link to="/team" className='hover:bg-gray-700 rounded-md py-2 text-white mt-1 font-medium p-5'>Team</Link>
                    <Link to="/about" className='hover:bg-gray-700 rounded-md py-2 text-white mt-1 font-medium p-5'>About Us</Link>
                    <Link to="/services" className='hover:bg-gray-700 rounded-md py-2 text-white mt-1 font-medium p-5'>Services</Link>
                    <Link to="/login" className='hover:bg-gray-700 rounded-md py-2 text-white mt-1 font-medium p-5'>Log In</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
