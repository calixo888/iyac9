import Link from "next/link";

const HeaderNav = () => (
  <>
    <div className="z-10 fixed left-3 top-3">
      <Link href="/#">
        <div className="bg-white text-black py-2 px-5 rounded-full border-gray-1 shadow-lg text-lg">☁️ IYA<strong>C9</strong></div>
      </Link>
    </div>
    <div className="z-10 fixed right-3 top-3">
      <div className="flex flex-row items-center">
        <Link href="/#mural">
          <div className="desktop bg-white text-black py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">Mural</div>
        </Link>
        <Link href="/#people">
          <div className="bg-white py-2 px-5 text-black rounded-full border-gray-1 shadow-lg text-md ml-3">People</div>
        </Link>
      </div>
    </div>
  </>
)

export default HeaderNav;