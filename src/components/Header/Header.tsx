import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white border-b py-2 flex items-center justify-center shadow-md">
      <img src={Logo} alt="Logo book library" className="w-24" />
    </header>
  );
};

export default Header;
