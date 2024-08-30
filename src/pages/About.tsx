import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function About() {
  return (
    <Layout title="About Me">
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>
          Welcome to my personal website. I am Alex Talmazan, a passionate
          Front-End Developer.
        </p>
      </div>
    </Layout>
  );
}

export default About;
