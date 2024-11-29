import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/produtos?filter=${encodeURIComponent(searchTerm.trim())}`;
    }
  };


  return (
    <header className="py-6 bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-[100px]">

        <div className="flex justify-between flex-wrap">
          <div>
            <Link
              to="/">
              <Logo />
            </Link>
          </div>

          <form onSubmit={handleSearch} className="w-[559px] h-[60px] relative">
            <input
              className="w-full h-full absolute inset-0 bg-dark-gray-2 bg-opacity-[4%] placeholder:text-dark-gray-3 placeholder:text-opacity-[60%] placeholder:text-lg pl-4 pr-12 rounded-lg focus:outline-dark-gray-3"
              type="text"
              placeholder="Pesquisar produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              aria-label="Buscar"
            >
              <img src="/assets/search.svg" alt="Buscar" className="w-6 h-6" />
            </button>
          </form>

          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="text-[16px] text-dark-gray-2 font-normal leading-7 tracking-[0.75px] underline"
            >
              Cadastre-se
            </Link>
            <Link to="/login">
              <button className="bg-primary w-[114px] h-[40px] rounded-lg text-light-gray-3">
                Entrar
              </button>
            </Link>
          </div>
          <div className="flex items-center">
            <img src="/assets/carrinho.svg" alt="" />
          </div>
        </div>
        <nav className="space-x-8 mt-[30px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold leading-6 tracking-[0.75px] text-primary border-b-2 border-primary"
                : "text-[16px] font-normal leading-7 tracking-[0.75px] text-dark-gray-2"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/produtos"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold leading-6 tracking-[0.75px] text-primary border-b-2 border-primary"
                : "text-[16px] font-normal leading-7 tracking-[0.75px] text-dark-gray-2"
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/categorias"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold leading-6 tracking-[0.75px] text-primary border-b-2 border-primary"
                : "text-[16px] font-normal leading-7 tracking-[0.75px] text-dark-gray-2"
            }
          >
            Categorias
          </NavLink>

          <NavLink
            to="/pedidos"
            className={({ isActive }) =>
              isActive
                ? "text-[16px] font-bold leading-6 tracking-[0.75px] text-primary border-b-2 border-primary"
                : "text-[16px] font-normal leading-7 tracking-[0.75px] text-dark-gray-2"
            }
          >
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;