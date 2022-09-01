import Head from "next/head";
import { useState } from "react";
import Carousel from "../components/carousel/carousel";
import Category from "../components/category/category";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Dreams from "../components/home";
import styles from "../styles/Home.module.css";
import Product from "./product/product";

export default function Home() {
  const [login, setLogin] = useState(true)

  console.log(login, "state")
  return (
    <>
      {/* {login ? <SignUp setLogin={setLogin} /> : ( */}
        <div className={styles.container}>
          <Head>
            <title>tripperspk | Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Header />
            <Dreams />
            <Category />
            <Carousel />
            <Product />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      {/* )} */}
    </>
  );
}
