import React from "react";
import Layout from "../components/layout";
import { getCategories } from "../lib/api";
import styles from "./about.module.scss";
import stylesArticle from "./article/article.module.scss";

const About = ({ categories }) => {
  return (
    <Layout categories={categories}>
      {/*<div className={stylesArticle.content}> */}
      <h3 className={styles.container}>Education</h3>
      2019 - 2021 Royal College of Art - MA Service Design
      <br />
      2020 London Business School MBA programme elective, Business Model
      Experiments: Ideation to Prototyping
      <br />
      2012 - 2017 Burg Giebichenstein University of Art and Design - BA
      Industrial Design | Halle Saale
      <br />
      2016 Hasso Plattner Institute - Design Thinking Basic Track | Potsdam
      <br />
      <p>
        <h3 className={styles.container}>Work - Experience</h3>
        10/2018 - 09/2019 Burg Giebichenstein University of Art and Design
        Artistic associate Glass & Ceramic Department | Halle Saale <br />
        Tasks.... <br />
        04/2019 - 07/2019 Magdeburg-Stendal University of Applied Sciences
        Visiting lecturer - Department of Engineering and Industrial Design - ID{" "}
        <br />
        Tasks....
        <br />
        09/2016 - 02/2017 BMW Automobile Colour & Trim Internship | FIZ München
        <h3 className={styles.container}>Exhibitions</h3>
        2015
        <br />
        100 % Paper - Designhaus Halle "bunt geschöpftes"
        <br />
        Hallesche Formen - Galerie Vermittlungsstelle b "héritage"
        <br />
        Marta Herford "bunt geschöpftes"
        <br />
        Designers Open "trial error &"
        <br />
        Kunststiftung des Landes Sachsen Anhalt "trial error &"
        <br />
        Bauhaus Dessau "trial error &"
        <br />
        2016
        <br />
        Staged/ room + style Dresden "héritage"
        <br />
        Ambiente Frankfurt "héritage"
        <br />
        68. internationale Handwerksmesse München "héritage"
        <br />
        Grassi Museum for applied art Leipzig included "trial error &" in the
        permanent collection
        <br />
        Bauhaus Dessau "peripher"
        <br />
        Bienal de Diseño 2016 La Habana Cuba "trial error &"
        <br />
        2018
        <br />
        FuoriSalone "marine cotton"
        <br />
        LODZ Design Festival "marine cotton"
        <br />
        2019
        <br />
        Reine Formsache - Porzellanikon "héritage"
        <br />
        2020
        <br />
        Plant Fever - Grand Hornu Belgium "marine cotton"
        <h3 className={styles.container}>Awards</h3>
        2015
        <br />
        Recycling Designpreis
        <br />
        Giebichenstein Designpreis
        <br />
        <a href="https://www.burg-halle.de/design/industriedesign/produktdesign-keramik-und-glasdesign/aktuelles/a/franz-award-2015-international-porcelain-design-competition-in-peking/">
          Franz Award
        </a>{" "}
        <br />
        2016
        <br />
        Staged Design Award
        <br />
        Talente 2016 - Handwerkskammer München
        <br />
        Glas Design Wettbewerb - Glasmanufaktur Harzkristall
        <br />
        2017
        <br />
        TISDC (Taiwan International Student Design Competition) 2017
        <br />
        2019
        <br />
        Designblok - Ahoj future! Prague
        <br />
        Links <a href="https://nextjs.org/">name the link</a> and{" "}
        <a href="https://strapi.io/">Strapi</a> powered blog.
      </p>
      {/*</div>*/}
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = (await getCategories()) || [];
  return {
    props: { categories },
    unstable_revalidate: 1,
  };
}

export default About;
