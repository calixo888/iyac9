const HeaderNav = () => (
  <>
    <div className="z-10 fixed left-3 top-3">
      <a href="/#">
        <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-lg">☁️ IYA<strong>C9</strong></div>
      </a>
    </div>
    <div className="z-10 fixed right-3 top-3">
      <div className="flex flex-row items-center">
        <a href="/#mural">
          <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">Mural</div>
        </a>
        <a href="/#people">
          <div className="bg-white py-2 px-5 rounded-full border-gray-1 shadow-lg text-md ml-3">People</div>
        </a>
      </div>
    </div>
  </>
)

export default HeaderNav;