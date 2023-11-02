import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Stablecoins',
    Svg: require('@site/static/img/multichain-gumdrop.svg').default,
    description: (
      <>
        Explore how to use USDC and EURC to enable a faster, safer, and more efficient way to send, spend, and exchange money around the globe. Circle stablecoins power apps to provide anytime-access to payments and financial services. Tap into Cross-Chain Transfer Protocol (CCTP), a permissionless and capital efficient on-chain utility to move USDC across chains by native burning and minting – unifying liquidity across the ecosystem and simplifying user experience.
      </>
    ),
    link: {
      href: '/cctp/cctp-getting-started',
      label: 'Documentation',
    },
  },
  {
    title: 'Web3 Services',
    Svg: require('@site/static/img/code-gumdrop.svg').default,
    description: (
      <>
        Embed secure, fully functional Web3 wallets using APIs and SDKs. Enable familiar UX and gas-less transaction experiences with Programmable Wallets and support on-chain interactions with Smart Contract Platform to import, deploy, and manage smart contracts.
      </>
    ),
    link: {
      href: '/',
      label: 'Documentation',
    },

  },
  {
    title: 'Circle Mint',
    Svg: require('@site/static/img/transaction-gumdrop.svg').default,
    description: (
      <>
        Directly mint and redeem USDC and EURC at scale from your connected bank account using Circle’s web UI or API integration. Manage funds securely and seamlessly distribute them to crypto wallets around the world, 24/7.
      </>
    ),
    link: {
      href: '/',
      label: 'Documentation',
    },
  },

  {
    title: 'Circle Research',
    Svg: require('@site/static/img/identity-gumdrop.svg').default,
    description: (
      <>
        Circle Research aims to accelerate and amplify technical innovation within the crypto industry by developing technical, open-source research with direct applications. Projects published by Circle Research are committed to public good and open-source contributions to push the boundaries of technology used in crypto, blockchain, and Web3.
      </>
    ),
    link: {
      href: '/circle-research/overview',
      label: 'Documentation',
    },
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={clsx('text--center card__footer padding-horiz--md')}>
        {link && link.href && link.href.length > 0 && (
          <a href={link.href} className="button button--primary margin-horiz--xs">
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
