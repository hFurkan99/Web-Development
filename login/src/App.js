import { Login } from "@bs/login";

function App() {
  const LoginPage = (
    <Login
      url="https://localhost:7125"
      version={process.env.VERSION}
      theme="half-and-half"
      image="https://basarsoft.com.tr/wp-content/uploads/2022/09/basarsoft-cbs-hmp1.jpg?id=24451"
      logo="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cc-by-sa-1.0_Ba%C5%9Farsoft.png"
      appName="Başarsoft Core Projesi"
      edevlet={true}
      register={true}
      rememberMe={true}
      captcha={true}
      forgotPassword={true}
      onSuccess={(data) => {
        alert("success");
      }}
    />
  );

  return (
    <div className="container">
      <LoginPage />
    </div>
  );
}

export default App;
