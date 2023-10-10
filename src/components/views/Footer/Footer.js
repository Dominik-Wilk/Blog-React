const Footer = () => {
  const year = () => new Date().getFullYear();

  return (
    <p className='d-flex justify-content-center text-secondary'>
      Copyright ©BlogApp {year()}
    </p>
  );
};

export default Footer;
