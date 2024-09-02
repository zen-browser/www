"use client";
import Footer from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { releaseNoteIsAlpha, releaseNotes } from "@/lib/release-notes";
import Link from "next/link";
import Markdown from 'react-markdown'
import './markdown.css';

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div id="policy" className="min-h-screen py-42 flex mx-auto my-52 p-10 lg:p-0 w-full lg:w-1/3 flex-col">
        <Markdown>
          {`
# Privacy Policy
* Last updated: 2024-08-12

# Introduction
Welcome to Zen Browser! Your privacy is our priority. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect your data when you use Zen Browser.

## 1. Information We Do Not Collect
Zen Browser is designed with privacy in mind. We do not collect, store, or share any of your personal data. Here’s what that means:

* Crash reports can be sent to Mozilla Firefox. But, we do not collect any crash reports. Crash reports are sent securely to Mozilla Firefox to help improve the stability of the browser. They do not contain any personal information.

## 1.1. No Telemetry
We do not collect any telemetry data. 

However, you can opt-in to share telemetry data to Mozilla for the improvement of FireFox (the base upon which the Zen Browser is built). It will be treated in accordance with their Privacy Policy which you can read about [here](https://www.mozilla.org/en-US/privacy/).

## 1.2. No Personal Data Collection
Zen Browser does not collect any personal information such as your IP address, browsing history, search queries, or form data.

## 1.3. No Third-Party Tracking
We do not allow third-party trackers or analytics tools to operate within Zen Browser. Your browsing activity remains entirely private and is not shared with any third party. Mozilla is not considered a third party as it is the base of Zen Browser.

# 2. Information Stored Locally on Your Device
## 2.1. Browsing Data
Zen Browser stores certain data locally on your device to enhance your browsing experience. This includes:

* **Cookies**: Cookies are stored locally on your device and are not shared with Zen Browser or any third party. You have full control over the management of cookies through the browser’s settings.
* **Cache and Temporary Files**: Zen Browser may store cache files and other temporary data locally to improve performance. These files can be cleared at any time through the browser’s settings.

## 2.2. Settings and Preferences
Any customizations, settings, and preferences you make within Zen Browser are stored locally on your device. We do not have access to or control over this data.

# 3. Sync Feature
Zen Browser offers a "Sync" feature, this is implemented using Mozilla Firefox's Sync feature. This feature allows you to synchronize your bookmarks, history, passwords, and other data across multiple devices. For this feature to work, your data is encrypted and stored on Mozilla’s servers and is treated in accordance with their Privacy Policy. We, at Zen, cannot view any of this data. 

* [Mozilla Firefox Sync](https://www.mozilla.org/en-US/privacy/mozilla-accounts/)
* [This is how we store your passwords](https://support.mozilla.org/en-US/kb/how-firefox-securely-saves-passwords#:~:text=Firefox%20Desktop%20encrypts%20your%20passwords,cryptography%20to%20obscure%20your%20passwords.)

# 4. Data Security
Although Zen Browser does not collect your data, we are committed to protecting the information that is stored locally on your device and, if you use the Sync feature, the encrypted data stored on Mozilla's servers. We recommend that you use secure passwords, enable device encryption, and regularly update your software to ensure your data remains safe. 

* Note that most of the security measures are taken care by Mozilla Firefox.

# 5. Your Control
## 5.1. Data Deletion
You have full control over all data stored locally on your device by Zen Browser. You can clear your browsing data, cookies, and cache at any time using the browser’s settings.

## 5.2. Do Not Track
Zen Browser automatically honors "Do Not Track" requests by default. We ensure that no tracking of your activity occurs, in compliance with this setting.

# 6. Our Website and Services

When you click on the "Download" button on our website, a number in the database is incremented to track the number of downloads. This is done to understand the popularity of the browser. No personal data is collected during the process.

## 6.1.	External links
Zen Browser may contain links to external websites or services that are not owned or operated by us. We are not responsible for the content or privacy practices of these sites. We recommend that you review the privacy policies of these sites before providing them with any personal information.

# 7. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the effective date at the top of this policy. Continued use of Zen Browser after such changes constitutes your acceptance of the new terms.

# 8. Other telemetry done by Mozilla Firefox

We try to disable all telemetry data collection in Zen Browser. But, we may have missed some. Check the below links for more information.

You can also optionally enable telemetry data collection and other Mozilla Research Studies in Zen Browser. This is disabled by default. You can enable it by going to the settings page.

* Please check [Firefox Privacy Notice](https://www.mozilla.org/en-US/privacy/) for more information.

# 9. Contact Us
If you have any questions or concerns about this Privacy Policy or Zen Browser, please contact us at:

* Discord: [Zen Browser's Discord](https://discord.com/servers/mauro-s-little-sweatshop-1088172780480114748)
* GitHub: [Organization](https://github.com/zen-browser)

---

By using Zen Browser, you agree to this Privacy Policy. Remember, with Zen, your privacy is in your hands.`}
        </Markdown>
      </div>
    </main>
  )
}
