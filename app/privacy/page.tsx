import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="w-full bg-white">
      <section className="mx-auto w-full max-w-5xl px-6 py-12 lg:px-12">
        <nav className="text-sm text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">Home</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-zinc-900">Privacy Policy</span>
        </nav>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-zinc-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-zinc-500">Last updated on July 25, 2025.</p>

        <div className="mt-8">
          <div className="relative mx-auto aspect-[4/2] w-full overflow-hidden rounded-2xl bg-white shadow">
            <Image
              src="/p123.webp"
              alt="Hero dish"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <section className="prose prose-zinc mt-10 max-w-none">
          <h2>Applicability and Scope</h2>
          <p>
            We respect your privacy and are committed to protecting it. This policy describes the types of
            information we may collect when you use our website and services, and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
          </p>
          <ul>
            <li>The types of information we collect when you use our services.</li>
            <li>How we use, store, and protect your information.</li>
            <li>Your choices regarding your information.</li>
          </ul>
          <h2>Information We Collect</h2>
          <p>
            We may collect information that you provide directly, information collected automatically, and
            information from third parties, in accordance with applicable laws.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>The information we collect and how we use it</h2>
          <p>
            QuickrunEats and its platforms and affiliate companies collect information from and about users of our
            Services, which includes:
          </p>
          <h3>Your Personal Information</h3>
          <p>
            Information that relates to an identified or identifiable individual. This may include data you provide
            directly, data generated through your use of the Services, or data obtained from third parties, which,
            either alone or in combination with other information we possess or are likely to access, can identify
            you. Examples are further detailed throughout this policy.
          </p>
          <h3>Other Information</h3>
          <p>
            Data related to your use of the Services that may not directly identify you by itself but is collected
            in connection with your account or activities. This includes, but is not limited to, information about
            your internet connection, the specific device(s) and equipment you use to access our Services, and
            details about your usage patterns and interactions with the Services.
          </p>
          <p>
            As detailed elsewhere in this policy, we collect this information through various means: directly from
            you, automatically during your interaction with our Services (utilizing technologies like cookies and
            tracking tools), and indirectly from third-party sources.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Information You Provide to Us</h2>
          <p>The information we collect on or through our Services may include:</p>
          <h3>Personal information</h3>
          <p>
            Name, address, email address, postal code, password and other information you may provide with your
            account, such as your gender, mobile phone number, date of birth, anniversary date, user bio, nationality
            and website. This also includes your profile picture that will be publicly displayed as part of your
            account profile. You may optionally provide us with this information through third-party sign-in services
            such as Facebook and Google. In such cases, we fetch and store whatever information is made available to
            us through these sign-in services.
          </p>
          <h3>Your content</h3>
          <p>
            Information you provide through our Services, including your reviews, photographs, comments, lists,
            followers, the users you follow, current and prior restaurant reservation details, food ordering details
            and history, favourite restaurants, special restaurant requests, contact information of people and other
            information you provide on our Services, and other information in your account profile. By providing
            information of a third-party individual (such as for placing orders on behalf of someone else) you confirm
            that you have such individual’s consent to share their personal information with QuickrunEats.
          </p>
          <h3>Your bookings and preferences</h3>
          <p>
            Any information provided by you directly while utilising the Services will also be collected by us. This
            includes details related to events you book, attend, or express interest in via our Services (such as
            District), including ticket types, seat preferences, attendance confirmations, event feedback, specific
            event-related preferences (e.g., accessibility needs volunteered by you), and any information shared when
            interacting with event organizers or venues through our platform. We may also record dietary preferences
            or restrictions, cuisine preferences, preferred price points, occasion types (e.g., birthday, anniversary)
            and any data you input or actions you take while interacting with specific features, such as providing
            travel details (such as train PNR), event booking data, loyalty program participation, or preferences
            selected within any Service.
          </p>
          <h3>Your activities</h3>
          <p>
            The search terms you have looked up and results you selected, how long you used our Services and which
            features you used; the ads you clicked on.
          </p>
          <h3>Your communications</h3>
          <p>
            Communications between you and other users, delivery partners or merchants through our Services, some of
            which may be recorded for internal purposes; your participation in a survey, poll, sweepstakes, contest or
            promotion scheme; your request for certain features (e.g., newsletters, updates or other products); your
            communication with us about employment opportunities posted to the Services; your correspondence with our
            customer service and other grievance redressal mechanisms. If you exchange messages with others through
            the Services, we may store them in order to process and deliver them, allow you to manage them, and
            investigate possible violations of our Terms of Service and wrongdoing in connection with the Services. If
            you send information from the Services to your mobile device via SMS text message, we may log your phone
            number, phone carrier, and the date and time that the message was processed. Carriers may charge
            recipients for texts that they receive.
          </p>
          <h3>Your transactional information</h3>
          <p>
            If you make reservations or purchases through our Services, we may collect and store information about you
            to process your requests and automatically complete forms for future transactions, including (but not
            limited to) your phone number, address, email, billing information and credit or payment card information.
            This information may be shared with third-parties which assist in processing and fulfilling your requests,
            including PCI compliant payment gateway processors. If you write reviews about businesses with which you
            conduct transactions through our Services, we may publicly display information that you transacted with
            those businesses.
          </p>
          <h3>Public contributions</h3>
          <p>
            You may also provide information (such as ratings, reviews, tips, photos, comments, likes, bookmarks,
            friends, lists, etc.) to be published or displayed on publicly accessible areas of our Services, or
            transmitted to other users of our Services or third-parties (collectively, &quot;User Contributions&quot;).
            Your User Contributions are posted on publicly accessible areas of our Services and transmitted to others
            at your own risk. We may display this information on the Services, share it with businesses, and further
            distribute it to a wider audience through third party sites and services. You should be careful about
            revealing any sensitive details about yourself in such postings.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Data of Minors</h2>
          <p>
            Our Services are generally not directed to or intended for use by individuals under the age of 18
            (&quot;Minors&quot;), and we do not knowingly collect personal information from Minors for the purposes
            of creating an account or for general use of our platform. However, we recognize that certain services
            offered through our platform may be open to use by Minors.
          </p>
          <p>
            While our platform is not designed for Minors, we recognize that an adult user may need to provide
            limited information about a Minor to access certain services (for example, purchasing a ticket for a
            family-friendly event on District). By providing personal information of a Minor, you, the adult user,
            represent and warrant that:
          </p>
          <ul>
            <li>You are the parent or legal guardian of the Minor; and</li>
            <li>
              You give your explicit consent for QuickrunEats to collect and process the Minor&apos;s information
              for the specific and limited purpose disclosed at the time of collection.
            </li>
          </ul>
          <p>
            The information collected will be used solely to facilitate the requested service and will not be used to
            create a user profile for the Minor or for any marketing, profiling, or other secondary purposes. You are
            responsible for any information you provide about a Minor. If we become aware that personal information of
            a Minor has been provided without the requisite and valid parental or guardian consent, we reserve the
            right to delete such information immediately.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Information We Collect Through Automatic Data Collection Technologies</h2>
          <p>
            We may automatically collect certain information about the computer or devices (including mobile devices)
            you use to access the Services, and about your use of the Services, even if you use the Services without
            registering or logging in.
          </p>
          <h3>Service Usage &amp; Activity Data</h3>
          <p>
            Details about your interactions with our Services, such as search queries, pages viewed, features used,
            content interactions (clicks, scrolls, time spent), transaction history summaries, error logs, timestamps,
            referral URLs (the last web page visited before ours), and other usage patterns and communication data
            generated while using the Services. For mobile application users, this may include the online or offline
            status of the application.
          </p>
          <h3>Device &amp; Connection Information</h3>
          <p>
            Data about the computer, mobile device, or other equipment used to access our Services. This includes IP
            address, device type, operating system, browser type and version, unique device identifiers (such as Apple
            IDFA, Android Advertising ID, or other manufacturer-assigned IDs), mobile network information, device
            settings (like language, time zone), connection type and speed, and potentially the device&apos;s telephone
            number associated with the SIM card or device.
          </p>
          <h3>Computer and device information</h3>
          <p>
            Information about your computer, internet connection and mobile device, including your IP address, operating
            systems, platforms, browser type, other browsing information (connection, speed, connection type etc.),
            device type, device&apos;s unique device identifier, mobile network information and the device&apos;s telephone
            number. We may also collect your unique mobile device identifier (e.g. IDFA or other device IDs on Apple
            devices). If you&apos;re using our Services on a mobile device, we may use mobile device IDs (the unique
            identifier assigned to a device by the manufacturer), instead of cookies, to recognize you. We may do this
            to store your preferences and track your use of our applications. Unlike cookies, mobile device IDs cannot
            be deleted.
          </p>
          <h3>Stored information and files</h3>
          <p>
            Our applications may also access metadata and other information associated with files stored on your mobile
            device. This may include, for example, photographs, audio and video clips, personal contacts and address
            book information.
          </p>
          <h3>Mobile status</h3>
          <p>
            If you use any of QuickrunEats applications, we may collect information about the presence and/or absence
            and/or details pertaining to other applications on your mobile phone. This helps us enable specific
            features for your benefit, such as payment / UPI links.
          </p>
          <h3>Precise and real-time location information</h3>
          <p>
            When you use one of our location-enabled services (for example, when you access Services from a mobile
            device), we may collect and process information about your mobile device&apos;s GPS location (including the
            latitude, longitude or altitude of your mobile device) and the time the location information is recorded to
            customize the Services with location-based information and features (for example, to inform you about
            restaurants in your area or applicable promotions). Some of these services require your personal data for
            the feature to work and we may associate location data with your device ID and other information we hold
            about you.
          </p>
          <h3>Cookies and Other Electronic Tools</h3>
          <p>
            We, and third parties with whom we partner, may use cookies, pixel tags, web beacons, mobile device IDs,
            &quot;flash cookies&quot; and other similar files or technologies to collect and store information in respect
            to your use of the Services and third party websites. This is to store your preferences and settings,
            enhance your experience by delivering content and advertising specific to your interests, perform research
            and analytics, track your use of our Services, and assist with security and administrative functions.
            QuickrunEats uses pixel tags to measure the popularity of our various pages, features and services. We also
            may include web beacons in e-mail messages or newsletters to determine whether the message has been opened
            and for other analytics.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Information from Third Parties</h2>
          <p>We may also obtain information about you from third-party sources, including:</p>
          <h3>Third-Party Account Authentication</h3>
          <p>
            If you choose to log in, link, or otherwise connect your account with a third-party service (such as
            Google, Facebook, or other platforms we may support), you authorize us to collect, store, and use
            information that you permit that third-party service to share with us through their application
            programming interface (API) and based on the permissions you grant during the authentication or connection
            process.
          </p>
          <p>
            This information may include, without limitation, your third-party user ID, name, email address, profile
            picture, contacts or friend lists (subject to your permissions), publicly available information on your
            profile, and any other details made available via the third-party service&apos;s permission interface.
          </p>
          <p>
            We recommend reviewing your third-party provider&apos;s privacy policy and your privacy settings on that
            platform to understand what information they share and how to manage it.
          </p>
          <h3>Other Third Parties</h3>
          <p>
            We may also obtain information about you from other sources such as business partners (including
            restaurant, payment, and event partners), marketing and advertising partners, data enrichment services,
            data brokers, analytics providers, researchers, publicly available sources, affiliates within the
            QuickrunEats group, and potentially other users (e.g., if they refer you, add you to a reservation/order
            or upload your contact).
          </p>
          <h3>Combining Information</h3>
          <p>
            We expressly reserve the right to combine information obtained from any third-party sources with the
            information we collect directly from you or automatically through your use of our Services. This combined
            information is used to update, expand, and analyze our records, identify potential new customers, provide
            tailored advertising and experiences, improve our Services, and for other purposes described in this
            policy.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>How we use the information we collect</h2>
          <p>
            We primarily collect your data to provide you the Services that you opt for. Our Services are backed by a
            wide array of supporting services that directly or indirectly improve the Services offered to you. We use
            the information we collect from and about you for a variety of purposes, including to:
          </p>
          <h3>Core Service Delivery &amp; Operations</h3>
          <p>
            Administer our Services by sharing information with relevant third parties (delivery partners, restaurant
            partners, service providers, vendors) to facilitate provisions of the Services. Process and complete your
            transactions. We also use your information to process and respond to your queries and complaints, provide
            you with customer support, allow you to participate in interactive features, send you questions from other
            users that you may be able to answer, provide you with policies about your account and notify you about
            changes to our platform and Services.
          </p>
          <h3>Platform Maintenance, Security &amp; Compliance</h3>
          <p>
            Diagnose technical problems, platform issues, and maintain stability and functionality; detect and prevent
            fraud, abuse of promotional activities, and violation of our terms of service; carry out our obligations
            and enforce our rights arising from any contracts (including billing and collection); and comply with legal
            requirements and obligations.
          </p>
          <h3>Service Improvement, Personalization &amp; Research</h3>
          <p>
            Understand our users (behavior, preferences, feature usage) to improve the content and features of our
            Service; personalize your experience by offering customized content, deals, and other services based on
            your preferences and interests; generate reports; conduct data analysis; research user base and usage
            patterns; and conduct employee training and quality assurance.
          </p>
          <h3>Marketing, Advertising &amp; Promotions</h3>
          <p>
            Send you communications (via email, SMS, phone, WhatsApp, etc.) that we determine may be of interest to you
            regarding our services or promotions; share your preferences or availed services (if applicable) for
            marketing/promotional activities; enable us to show you advertisements relevant to your likely interests;
            and administer promotions, contests, and sweepstakes. We may also use your information to contact you about
            goods and services that may be of interest to you.
          </p>
          <h3>Analytics and advertising</h3>
          <p>
            To help us better understand your use of the Services, we may use third-party web analytics on our
            Services, such as Google Analytics. These service providers use the sort of technology described in the
            &quot;Automatically-Collected Information&quot; section above. The information collected by this technology
            will be disclosed to or collected directly by these service providers, who use the information to evaluate
            our users&apos; use of the Services. When accessing the Services from a mobile application you may also
            receive tailored in-application advertisements. We may use the information we have collected from you to
            enable us to display advertisements to third-party advertisers&apos;/service providers&apos; target
            audiences. Even though we do not disclose your personal information for these purposes without your
            consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you
            meet its target criteria.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Third Parties</h2>
          <p>
            Third-party advertisers and partners accessible via our Services use their own tracking technologies (like
            cookies and device IDs) to collect data about your Service usage. They use this to personalize ads shown to
            you (on our Services or elsewhere) based on your activity and to measure ad performance. We also allow ad
            networks (e.g., Google Analytics, DoubleClick) to serve tailored ads directly on our Services using their
            own tracking technologies.
          </p>
          <p>
            Importantly, QuickrunEats does not control these third-party technologies or their data practices; their
            own privacy policies apply. Opting out of tailored advertising will not stop ads altogether, only
            personalization. We are not responsible for the function or accuracy of third-party opt-out mechanisms.
          </p>
          <h2>Social Features</h2>
          <p>
            To enhance your experience and enable social features on our Services, such as finding friends or sharing
            recommendations, you may choose to provide us with information from your device&apos;s address book. We may
            use this information to help identify your contacts who are also users of our Services, to facilitate
            connections and recommendations between you and your contacts on the platform, and potentially to inform
            you about relevant activity of your contacts on the Services.
          </p>
          <h2>Recording and Retention of Interactions</h2>
          <p>
            To ensure service quality, maintain platform integrity, resolve disputes, conduct internal training, detect
            and prevent fraud, and for other essential administrative and operational purposes, we reserve the right to
            monitor and record communications and interactions that occur through or in connection with our Services.
            This includes, but is not limited to, telephone calls with our customer support or operational teams,
            messages exchanged via chat features within our platform between users, merchants, delivery partners, or
            QuickrunEats personnel, and potentially other forms of interaction facilitated through our Services. These
            recordings and associated data may be retained for as long as reasonably necessary to fulfill the purposes
            outlined above, comply with legal obligations, enforce our agreements, or as otherwise required for our
            legitimate business needs. Your continued use of communication features within our Services constitutes
            your acknowledgement of this monitoring and recording.
          </p>
          <h2>Integration Across QuickrunEats</h2>
          <p>
            To provide a seamless experience across our ecosystem and enhance operational efficiency, we may share your
            information with our affiliates and other current or future QuickrunEats group companies. This sharing
            facilitates functions such as unified login and identity management across platforms, cross-application
            feature integration, coordinated customer support, shared analytics for service improvement, and
            potentially offering bundled services or cross-promotional activities relevant to your interests across the
            QuickrunEats group of companies.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>How we share the information we collect</h2>
          <p>
            We use personal information to provide you with the services that you have opted to receive through the use
            of our platform and services. For facilitation of this, we may disclose personal information that we collect
            or you provide, as described in this privacy policy, in the following ways:
          </p>
          <h3>General Information Disclosures</h3>
          <p>
            To our subsidiaries and affiliates within the QuickrunEats group, which are entities under common ownership
            or control. This includes our applications, websites and other platforms operated by QuickrunEats group
            companies.
          </p>
          <p>
            To contractors, suppliers, and advertisers/service providers who are typically bound by contractual
            obligations to keep personal information confidential and use it only for the purposes for which we disclose
            it to them.
          </p>
          <p>
            To an actual or potential buyer or other successor in the event of a merger, divestiture, restructuring,
            reorganization, dissolution or other sale or transfer of some or all of QuickrunEats assets, whether as a
            going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information
            held by QuickrunEats about the users of our Services are among the assets transferred.
          </p>
          <p>
            To third-parties, including suppliers, to market their products or services to you if you have consented to
            receive promotional updates. We contractually require these third-parties to keep personal information
            confidential and use it only for the purposes for which we disclose it to them.
          </p>
          <h3>Service Providers</h3>
          <p>
            We may share your information with third‑party service providers that we use for a variety of purposes,
            such as to send you communications via emails, messages or tele‑call to inform you about our products and
            Services that may be of interest to you, push notifications to your mobile device on our behalf, provide
            voice recognition services to process your spoken queries and questions, help us analyze use of our
            Services, and process and collect payments.
          </p>
          <p>
            Some of our products, Services and databases are hosted by third‑party hosting services providers. We may
            also use third‑party service providers for other projects, such as conducting surveys, organizing
            sweepstakes or providing services and business/commercial solutions for us whether permanently or on an ad
            hoc basis. We may share information about you with these service providers to enable them to perform their
            services.
          </p>
        </section>
        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Legal Purposes</h2>
          <p>
            We may share your information when we believe in good faith that such sharing is reasonably necessary in
            order to investigate, prevent, or take action regarding possible illegal activities or to comply with legal
            processes. This may involve the sharing of your information with law enforcement, government agencies,
            courts, and/or other organizations on account of legal requests such as notices, summons, court order or
            government demand to comply with applicable laws.
          </p>
          <h2>Audit and other assurance purposes</h2>
          <p>
            We may also share your information to investigate and address threats or potential threats to the safety of
            any person, to investigate and address violations of this Privacy Policy or the Terms of Service, or to
            investigate and address violations of the rights of third parties and/or to protect the rights, property and
            safety of QuickrunEats, our employees, other users, or the public. We may also share information with
            internal and external audit teams and various stakeholders across our ecosystem, including affiliated
            entities, payment gateways, banks and other financial entities for fraud detection, prevention, mitigation,
            auditing and assurance purposes.
          </p>
          <h2>Social Networks</h2>
          <p>
            If you interact with social media features on our Services, such as social like/share buttons, or use your
            social media credentials to log in or post any content, these features may collect information about your
            use of the Services, as well as post information about your activities on the social media service. Your
            interactions with social media companies are governed by their privacy policies.
          </p>
          <h2>To enforce or apply our Terms</h2>
          <p>
            To enforce or apply our Terms of Service and other agreements, including for billing and collection
            purposes.
          </p>
          <h2>Correspondence</h2>
          <p>
            When you sign up for an account, you are opting in to receive correspondence from other QuickrunEats users,
            businesses, and QuickrunEats itself. You can log in to manage your email and notification preferences and
            follow the &quot;unsubscribe&quot; instructions for commercial email messages, but note that you cannot opt
            out of receiving certain administrative policy, service policy, or legal policy related correspondences from
            QuickrunEats.
          </p>
          <h2>Platform safety</h2>
          <p>
            If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of
            QuickrunEats, our customers or others. This includes exchanging information with other companies and
            organizations for the purposes of fraud protection and credit risk reduction.
          </p>
          <h2>With your consent</h2>
          <p>
            We may additionally share your information with third parties in any other circumstances where we have your
            consent to do so.
          </p>
        </section>

        <section className="prose prose-zinc mt-12 max-w-none">
          <h2>Information Shared with Merchants</h2>
          <p>
            When you initiate transactions such as making reservations, placing orders, or processing payments with
            restaurants or other merchant partners (&quot;Partners&quot;) through our Services, we share necessary
            information with the specific Partners to enable them to fulfill your request and provide their services
            effectively. This sharing mirrors the information exchange that might occur if you interacted directly with
            the Partner.
          </p>
          <p>
            Any information shared with a Partner through our Services is subject to that Partner&apos;s own privacy
            practices and policies. They may use this information for their own purposes, including service
            fulfillment, customer management, analytics, and potentially marketing (subject to their independent
            compliance with applicable laws). QuickrunEats has no control over, and assumes no responsibility or
            liability for, how Partners collect, use, or share the information provided to them. We strongly encourage
            you to review the privacy policy of any Partner you interact with directly or transact with through our
            Services.
          </p>
          <h3>Payment Card Information</h3>
          <p>
            To use certain aspects of our Services, such as to make reservations at certain restaurants and to make
            payments to certain restaurants, we may require your credit or debit card account information. By
            submitting your credit or debit card account information through our Services, you expressly consent to the
            sharing of your information with third-party payment processors, and other third-party service providers
            (including but not limited to service providers who provide fraud detection services to us and other third
            parties), and you further agree to the following terms:
          </p>
          <ul>
            <li>
              When you use a credit or debit card to secure a reservation through our Services, we provide your credit
              or debit card account information to our third-party payment service providers.
            </li>
            <li>
              When you initially provide your credit or debit card account information through our Services in order to
              use our payment services, we provide your credit or debit card account information to our third-party
              payment service providers. As explained in our Terms of Service, these third parties may store your
              credit or debit card account information so you can use such payment services in the future.
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
