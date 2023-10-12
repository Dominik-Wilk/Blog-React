const Footer = () => {
  const year = () => new Date().getFullYear();

  return (
    <p className='d-flex justify-content-center text-secondary mt-5'>
      Copyright ©BlogApp {year()}
    </p>
  );
};

export default Footer;
