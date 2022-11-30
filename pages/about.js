import Contact from "../Components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

export default function Team(){
  return(
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}