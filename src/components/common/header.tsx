import "../../styles/header.scss";

interface Props  {
  children: React.ReactNode;
}

export const Header = ({children}: Props) => {
  return (
    <div className="header-main-container">
      <header className="header-container">
        <img src="src/assets/logo.svg" alt="" />
      </header>
      {children}
    </div>
  )
}
