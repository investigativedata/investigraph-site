import "@fontsource/quicksand";
import "@fontsource/quicksand/700.css";
import "@fontsource/inconsolata";
import "./globals.css";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.description}>
        <div>
          <h3>investigraph</h3>
          <p>data catalog and pipeline for follow the money investigations</p>
        </div>
        <div className={styles.byio}>
          <a
            href="https://investigativedata.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="https://cdn.investigativedata.org/logo.png"
              alt="investigativedata.io Logo"
              width={25}
              height={25}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.overview}>
        <div className={styles.overviewItem}>
          <h2 className="">1. Discover a new data source</h2>
          <p className="">
            no matter if you find something interesting online, or a
            whistleblower sends you over a sql dump:{" "}
            <strong>investigraph</strong> provides adapters to load data in
            common formats from remote sources, apis, databases or local files.
          </p>
        </div>
        <div className={styles.overviewItem}>
          <h2 className="">2. Integrate into your catalog</h2>
          <p className="">
            <strong>investigraph</strong> helps with a complete pipeline to
            integrate, transform and periodically update your data, all within a
            simple UI and building on top of industry-standard etl frameworks.
          </p>
        </div>
        <div className={styles.overviewItem}>
          <h2 className="">3. Find new leads</h2>
          <p className="">
            because <strong>investigraph</strong> uses a common, standardized
            data model for all datasets, it is seamless to cross-reference every
            data point with interesting matches within your catalog to find new
            story hints.
          </p>
        </div>
      </div>
      <footer>
        <strong>investigraph</strong> is a project by{" "}
        <a href="https://investigativedata.io">investigativedata.io</a> and is
        funded by{" "}
        <a href="https://github.com/media-tech-lab">Media Tech Lab Bayern</a> |{" "}
        <a href="https://github.com/investigativedata/investigraph">github</a>
      </footer>
    </main>
  );
}
