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
* Last updated: 2024-08-02

# Introduction
Welcome to Zen Browser! Your privacy is our priority. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to protect your data when you use Zen Browser.

## 1. Information We Do Not Collect
Zen Browser is designed with privacy in mind. We do not collect, store, or share any of your personal data. Here’s what that means:

## 1.1. No Telemetry
We do not collect any telemetry data. Unlike other browsers that may track usage statistics or crash reports, Zen Browser does not gather any such information.

## 1.2. No Personal Data Collection
Zen Browser does not collect any personal information such as your IP address, browsing history, search queries, or form data.

## 1.3. No Third-Party Tracking
We do not allow third-party trackers or analytics tools to operate within Zen Browser. Your browsing activity remains entirely private and is not shared with any third party.

# 2. Information Stored Locally on Your Device
## 2.1. Browsing Data
Zen Browser stores certain data locally on your device to enhance your browsing experience. This includes:

* **Cookies**: Cookies are stored locally on your device and are not shared with Zen Browser or any third party. You have full control over the management of cookies through the browser’s settings.
* **Cache and Temporary Files**: Zen Browser may store cache files and other temporary data locally to improve performance. These files can be cleared at any time through the browser’s settings.

## 2.2. Settings and Preferences
Any customizations, settings, and preferences you make within Zen Browser are stored locally on your device. We do not have access to or control over this data.

# 3. Sync Feature
Zen Browser offers a "Sync" feature, similar to Firefox Sync, which allows you to synchronize your browsing data (such as bookmarks, passwords, and settings) across multiple devices. Here's how we handle your data when you use Sync:

* Please check [Firefox Privacy Notice](https://www.mozilla.org/en-US/privacy/) for more information.

# 4. Data Security
Although Zen Browser does not collect your data, we are committed to protecting the information that is stored locally on your device and, if you use the Sync feature, the encrypted data stored on our servers. We recommend that you use secure passwords, enable device encryption, and regularly update your software to ensure your data remains safe. 

* Note that most of the security measures are taken care by mozilla firefox.

# 5. Your Control
## 5.1. Data Deletion
You have full control over all data stored locally on your device by Zen Browser. You can clear your browsing data, cookies, and cache at any time using the browser’s settings.

## 5.2. Do Not Track
Zen Browser automatically honors "Do Not Track" requests by default. We ensure that no tracking of your activity occurs, in compliance with this setting.

# 6. Changes to This Privacy Policy
We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by updating the effective date at the top of this policy. Continued use of Zen Browser after such changes constitutes your acceptance of the new terms.

# 7. Contact Us
If you have any questions or concerns about this Privacy Policy or Zen Browser, please contact us at:

* Discord: [Zen Browser](https://discord.gg/nnShMQzR4b)
* GitHub: [Zen Browser](https://github.com/zen-browser)

---

By using Zen Browser, you agree to this Privacy Policy. Remember, with Zen, your privacy is in your hands.

`}
        </Markdown>
      </div>
      <Footer />  
      <Navigation /> {/* At the bottom of the page */}
    </main>
  )
}