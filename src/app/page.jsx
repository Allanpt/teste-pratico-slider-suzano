import SuzAssessment from "./components/organisms/SuzAssessment";
import ThemeProviderWrapper from "./components/fontProvider/OpenSans";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <ThemeProviderWrapper>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header />
        <main>
          <SuzAssessment type="performance" />
        </main>
        <Footer />
      </div>
    </ThemeProviderWrapper>
  );
}
