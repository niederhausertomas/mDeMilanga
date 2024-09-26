import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home')

    const getNavLinkClass = (linkName: string) => {
        return `${
            activeLink === linkName
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } rounded-md px-3 py-2 text-sm font-medium`
    }

    return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link 
              to="/"
              onClick={() => setActiveLink('Home')}
              className="flex flex-shrink-0 items-center text-3xl font-bold text-transparent bg-clip-text" 
              style={{ background: 'radial-gradient(circle, white 1%, #A98143 80%)', WebkitBackgroundClip: 'text' }}
            >
              "M DE MILANGA"
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                  <Link
                      to="/"
                      onClick={() => setActiveLink('Home')}
                      className={getNavLinkClass('Home')}
                  >
                    Home
                  </Link>
                  <Link
                      to="/subscription"
                      onClick={() => setActiveLink('Subscription')}
                      className={getNavLinkClass('Subscription')}
                  >
                    Subscription
                  </Link>
                  <Link
                      to="/order"
                      onClick={() => setActiveLink('Order')}
                      className={getNavLinkClass('Order')}
                  >
                    Order
                  </Link>
                  <Link
                      to="/contact"
                      onClick={() => setActiveLink('Contact')}
                      className={getNavLinkClass('Contact')}
                  >
                    Contact
                  </Link>
                  <Link
                      to="/about"
                      onClick={() => setActiveLink('About')}
                      className={getNavLinkClass('About')}
                  >
                    About
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col space-y-2 px-2 pb-3 pt-2">
            <DisclosureButton
              as={Link}
              to="/"
              onClick={() => setActiveLink('Home')}
              className={`${getNavLinkClass('Home')} w-full text-left`}
            >
              Home
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              to="/subscription"
              onClick={() => setActiveLink('Subscription')}
              className={`${getNavLinkClass('Subscription')} w-full text-left`}
            >
              Subscription
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              to="/order"
              onClick={() => setActiveLink('Order')}
              className={`${getNavLinkClass('Order')} w-full text-left`}
            >
              Order
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              to="/contact"
              onClick={() => setActiveLink('Contact')}
              className={`${getNavLinkClass('Contact')} w-full text-left`}
            >
              Contact
            </DisclosureButton>
            <DisclosureButton
              as={Link}
              to="/about"
              onClick={() => setActiveLink('About')}
              className={`${getNavLinkClass('About')} w-full text-left`}
            >
              About
            </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Navbar
