import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  Img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "NFC Spool Tagging",
    Svg: null,
    Img: require("@site/static/img/nfc-tagging.png").default,
    description: (
      <>
        Tag your filament spools to unlock powerful features, better
        organization, and advanced tracking capabilities.
      </>
    ),
  },
  {
    title: "Inventory Management",
    Svg: null,
    Img: require("@site/static/img/inventory-management-4.png").default,

    description: (
      <>
        Smart inventory management for your 3D filament spools — track type,
        color, weight, and weight. Stay organized and avoid waste.
      </>
    ),
  },
  {
    title: "Available Filament Tracking",
    Svg: null,
    Img: require("@site/static/img/weight-tracking.png").default,
    description: (
      <>
        Precisely track how much filament remains on each spool, eliminating
        mid-print failures and reducing waste.
      </>
    ),
  },
  {
    title: "Automatic Filament Configuration",
    Svg: null,
    Img: require("@site/static/img/nfc-configuration.png").default,
    description: (
      <>
        NFC tags automatically configure AMS settings when swapping filaments,
        streamlining your workflow and eliminating manual input errors.
      </>
    ),
  },
  {
    title: "Bambulab Compatibility",
    Svg: null,
    Img: require("@site/static/img/bambulab-compatibility.png").default,
    description: (
      <>
        Fully supports Bambulab X1, P1, and A1 product lines, enhancing your
        existing printer's capabilities.
      </>
    ),
  },
  {
    title: "Constantly Evolving",
    Svg: null,
    Img: require("@site/static/img/evolving.png").default,
    description: (
      <>
        New features are added all the time to make filament management even
        easier — with community-driven development, SpoolEase keeps improving.
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="h-full rounded-2xl border border-gray-300 bg-white shadow-md p-0 pb-0 pt-0 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-center mb-0 w-full px-12 pt-4 pb-2">
          {Svg && <Svg className="h-30 text-blue-600" role="img" />}
          {Img && (
              <img src={Img} className="rounded-2xl object-contain" alt="" />
          )}
        </div>
        <div className="text-center px-3">
          <Heading as="h3" className="text-xl font-semibold mb-2">
            {title}
          </Heading>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container !py-0">
        <div className="row gap-y-6">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
