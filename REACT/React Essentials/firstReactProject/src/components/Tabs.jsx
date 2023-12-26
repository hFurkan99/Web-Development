export default function ({ children, buttons, ButtonsContainer }) {
  //Container türünü tutmak ve kullanmak için bu prop büyük harfle başlamalı
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
