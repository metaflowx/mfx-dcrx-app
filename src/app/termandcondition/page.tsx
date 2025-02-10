import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg py-40">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Terms and Conditions
      </h1>

     

      {/* Content Sections */}
      <div className="space-y-8 text-gray-700">
        {/* Introduction */}
        <section id="introduction">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            1. Introduction
          </h2>
          <p>
            <span className="font-semibold">Purpose:</span> As part of accessing
            the DecryptoX platform and taking part in its Initial Coin Offering
            (ICO) for DCRX tokens, your usage is subject to these Terms and
            Conditions. Users who access or create accounts or purchase tokens
            through DecryptoX platform must comply with these Terms in their
            entire scope. These Terms serve as a binding agreement between you
            ("User") and DecryptoX.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Scope of Agreement:</span> This
            Agreement covers all activities on the DecryptoX platform, including
            token acquisition, staking, feature use, and any interactions
            involving the platform’s digital assets or proprietary technologies.
            All interactions with DecryptoX’s technology are subject to the
            provisions outlined herein.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg mt-4">
            <span className="font-semibold">Modification of Terms:</span>{" "}
            DecryptoX reserves the right to update or revise these Terms at any
            time without prior notification. Amendments will be effective
            immediately upon posting. We encourage Users to review these Terms
            regularly. Continued use of DecryptoX services constitutes
            acceptance of updated Terms.
          </div>
        </section>

        {/* Eligibility */}
        <section id="eligibility">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            2. Eligibility
          </h2>
          <div className="bg-green-50 p-4 rounded-lg">
            <span className="font-semibold">Age Requirement:</span> Only users
            who have reached an age of 18 years old or have reached the legal
            age of their jurisdiction can join the ICO and access DecryptoX
            services.
          </div>
          <div className="bg-green-50 p-4 rounded-lg mt-4">
            <span className="font-semibold">Jurisdictional Restrictions:</span>{" "}
            DecryptoX follows all cryptocurrency engagement rules set by
            jurisdictions that limit such operations. The User must double-check
            their participation eligibility against local laws before starting
            any process. DecryptoX prohibits Users from restricted regions to
            join based on the results of its compliance standards and regulatory
            assessments.
          </div>
        </section>

        {/* Token Purchase Terms */}
        <section id="token-purchase">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            3. Token Purchase Terms
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">Token Utility:</span> DCRX tokens
            are designed exclusively for utility within the DecryptoX ecosystem.
            Holders can access specific platform features, participate in
            decentralized governance votes, reduce transaction fees, and engage
            in staking mechanisms. DCRX tokens confer no equity, debt, or
            ownership interest in DecryptoX.
          </div>
          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <span className="font-semibold">Token Sale Structure:</span> The ICO
            features two distinct phases:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>
                Phase 1 (Pre-Presale): Running for 2 months prior to the public
                presale, this phase offers DCRX tokens at a fixed rate.
              </li>
              <li>
                Phase 2 (Public Presale): This phase lasts for 4 months, during
                which the token price increases incrementally every two days to
                incentivize early participation.
              </li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg mt-4">
            <span className="font-semibold">Non-Investment Disclaimer:</span>{" "}
            DCRX tokens do not represent any security, share. Purchases should
            be made with an understanding of the potential risks and should not
            be undertaken as an investment with an expectation of profit.
          </div>
        </section>

        <section id="payment-refund">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            4. Payment and Refund Policy
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Accepted Cryptocurrencies DecryptoX permits users to pay with
              Bitcoin (BTC) and Ethereum (ETH) and Tether (USDT) along with a
              limited range of specific cryptocurrencies. DecryptoX maintains
              the authority to change accepted payment types which will be
              displayed on their platform.
            </span>
          </div>

          <span>
            Finality of Transactions Users receive no ability to reverse any
            actions made within the DecryptoX platform. After blockchain
            processes token purchases they become irreversible because
            blockchain transactions cannot be reversed. Users should make their
            ICO choices wisely by understanding the system lacks any possibility
            to reverse transactions because this becomes a final blockchain
            action. Transaction Fees Users are responsible for any additional
            transaction fees, including blockchain or network fees, incurred
            during the purchase of DCRX tokens. DecryptoX does not cover or
            reimburse such fees.
          </span>
        </section>

        <section id="wallet-security">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            5. Wallet and Security
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Supported Wallets Users must use compatible wallets, such as
              MetaMask, Trust Wallet, or other BNB-compatible wallets, to
              connect with DecryptoX. It is the User's responsibility to ensure
              compatibility and functionality.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              User Responsibility for Security DecryptoX does not have access to
              User wallets or private keys. Users are solely responsible for the
              safekeeping of their private keys and wallet credentials.
              DecryptoX disclaims liability for any loss due to unauthorized
              access or theft from User accounts.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Connecting Wallets Securely For security purposes, Users should
              always confirm they are using the official DecryptoX website and
              avoid sharing private keys with any third parties. DecryptoXwill
              never request sensitive wallet information.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            6. Risks and Disclaimers
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Market Volatility Cryptocurrencies, including DCRX, are subject to
              high volatility. Users acknowledge the risk of substantial
              fluctuations in the value of DCRX and should consider these risks
              before purchasing.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Platform Development and Operational Risks DecryptoX is an
              evolving project, and unforeseen challenges may affect its
              development. These risks include potential delays, technical
              issues, or disruptions. DecryptoX makes no guarantees regarding
              future functionality.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              No Financial Returns or Guarantees DCRX is a utility token with no
              promise of returns or financial gain. Participation in the ICO
              should be based solely on intended usage within the
              DecryptoXecosystem rather than speculation or investment motives.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Limitation of Liability DecryptoX assumes no liability for losses
              or damages arising from ICO participation, including losses due to
              technical errors, unforeseen platform changes, or third-party
              actions.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            7. Intellectual Property
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Ownership Rights All DecryptoX content, including code,
              trademarks, logos, designs, and documentation, is the exclusive
              property of DecryptoX. Users do not acquire any ownership or
              intellectual property rights through token purchase or platform
              use.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Restrictions on Use Users may not use, copy, reproduce, or modify
              DecryptoX’s intellectual property without prior written
              permission. Unauthorized use of platform assets is strictly
              prohibited.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Third-Party Content DecryptoX may display or link to third-party
              materials. DecryptoX is not responsible for the accuracy or
              legitimacy of third-party content and does not endorse third-party
              offerings.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            8. Anti-Money Laundering (AML) and Know Your Customer (KYC)
            Compliance
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              DID/VC Verification Mechanism Users may be subject to
              decentralized identity verification using DID and VCs for
              compliance and security purposes. This verification does not
              compromise User privacy but ensures platform integrity.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              User Obligations Users must provide complete and accurate
              information when required for identity verification. Providing
              false or misleading information may result in account suspension.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Compliance Practices DecryptoX implements AML and KYC practices to
              prevent misuse of its services, including money laundering, fraud,
              and other illicit activities.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            9. Privacy Policy
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Scope of Data Collection DecryptoX collects data necessary for
              platform functionality, user interaction, and security compliance.
              This includes data such as IP addresses, transaction details,
              wallet addresses, and, when required, data for decentralized
              identity verification. User data is processed in compliance with
              privacy standards, ensuring transparency and accountability.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Use of Personal Data Collected data will be utilized strictly for
              improving user experience, security monitoring, and complying with
              regulatory requirements. DecryptoX may use aggregated data to
              analyze platform performance but will not sell or disclose
              individual data to third parties without user consent, except
              where required by law.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Data Sharing with Third-Party Services DecryptoX may share data
              with third-party service providers only when necessary to fulfill
              operational needs (such as identity verification) or compliance
              requirements. Third-party providers are contractually obligated to
              handle data securely and in line with DecryptoX’s privacy
              standards.
            </span>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Data Security and Storage DecryptoX uses encryption, regular
              security audits, and access controls to protect user data. While
              we strive for high security, users acknowledge the inherent risks
              in digital transactions and agree that DecryptoX is not liable for
              any unauthorized access resulting from security vulnerabilities
              outside its control.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            10. Termination and Account Suspension
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Termination Rights DecryptoX reserves the right to terminate user
              accounts in cases of violation of these Terms, misuse of the
              platform, or activities deemed illegal or harmful. Termination may
              occur without prior notice in severe cases, and access to DCRX
              tokens and platform features will be suspended accordingly.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Account Suspension for Security and Maintenance To ensure a secure
              platform, DecryptoX may temporarily suspend account access for
              maintenance, upgrades, or security assessments. Such suspensions
              will be communicated in advance when possible. Users acknowledge
              that while DecryptoX aims to minimize disruptions, some
              suspensions may be mandatory for security reasons.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              User Responsibilities Upon Termination Users whose accounts are
              terminated forfeit their access to the platform and any associated
              benefits. Terminated users remain responsible for any actions
              taken prior to termination, including financial obligations or
              claims resulting from breaches of these Terms.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            11. Indemnification
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              User Obligations By using DecryptoX services, users agree to
              indemnify and hold harmless DecryptoX and its affiliates against
              any claims, damages, losses, or expenses arising from their
              platform usage, ICO participation, or breach of these Terms.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Scope of Indemnification Indemnification includes all reasonable
              legal costs incurred by DecryptoX due to user actions, including
              litigation fees and damages resulting from misuse of the platform
              or illegal activities. Users assume liability for any third-party
              claims or demands resulting from their interactions on DecryptoX.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            12. Governing Law and Dispute Resolution
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Applicable Jurisdiction Any legal obligations to the Terms and
              Conditions will comply with Singapore laws as the governing
              framework. Each user consents to have their legal matters ruled by
              the specified jurisdictional laws.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Binding Arbitration for Dispute Resolution DecryptoX and its users
              use binding arbitration as the exclusive method to solve their
              disagreements while both parties agree to handle disputes in a
              confidential process. Both parties accept arbitration as an
              efficient option to standardized court procedures because the
              arbitrator's ruling will become their definitive conclusion.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Exclusions from Arbitration The arbitration clause does not apply
              when there are infringements of intellectual property rights or
              cases of criminal liability because these matters remain under the
              jurisdiction of Singaporean courts.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            13. Forward-Looking Statements and Risks Disclaimer
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Non-Guarantee of Future Outcomes DecryptoX may publish
              forward-looking statements regarding goals, anticipated
              developments, or future projections. These statements are for
              informational purposes only and should not be interpreted as
              guarantees of success, platform functionality, or financial
              returns. Users acknowledge the potential risks associated with
              technology development, regulatory shifts, and market volatility.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Assumption of Risks by Users Users should conduct their own
              research before participating in the DecryptoX ICO. By purchasing
              DCRX tokens or using the platform, users accept any and all risks,
              including technological, financial, and regulatory risks
              associated with cryptocurrency involvement.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            14. Contact and Support Information
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Official Communication Channels Users are encouraged to contact
              DecryptoX through the official communication channels specified on
              the website for any questions, technical support, or
              clarifications regarding the ICO, platform usage, or terms of
              service.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Customer Support Availability DecryptoX provides customer support
              to address technical issues, account queries, and general platform
              information. Support may be limited to specific hours, with
              response times contingent on the complexity of the inquiry.
            </span>
          </div>
        </section>

        <section id="risks">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            15. Acceptance of Terms
          </h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Acknowledgment of Terms and User Agreement By engaging with the
              DecryptoX ICO or using DecryptoX services, users confirm that they
              have read, understood, and accepted these Terms and Conditions.
              Continued use of the platform implies acceptance of any subsequent
              amendments.
            </span>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <span className="font-semibold">
              Amendments to Terms and Conditions Users agree that DecryptoX may
              modify these Terms to reflect evolving legal, regulatory, or
              operational requirements. Any updates will be posted on the
              DecryptoX website, and continued platform usage signifies
              agreement with the revised Terms.
            </span>
          </div>
        </section>

        {/* Add other sections similarly with appropriate styling and highlights */}
      </div>
    </div>
  );
};

export default TermsAndConditions;
