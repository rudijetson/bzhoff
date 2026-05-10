import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Brandon Hoff',
  description: 'Privacy policy for Social Media Publisher and other applications',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">Last updated: October 26, 2025</p>

      <div className="prose dark:prose-invert max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Social Media Publisher ("we", "our", or "us") operates as a personal development tool for automated social media posting.
          This Privacy Policy explains how we handle information when you use our Facebook application and other services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>Our application is designed for personal use by the developer. We may collect:</p>
        <ul>
          <li>Your Facebook account ID</li>
          <li>Access tokens for posting to Facebook Pages you manage</li>
          <li>Public profile information (name, profile picture)</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information solely to:</p>
        <ul>
          <li>Authenticate your access to the application</li>
          <li>Post content to Facebook Pages you own or manage</li>
          <li>Improve the functionality of our posting tool</li>
        </ul>

        <h2>4. Data Storage and Security</h2>
        <p>
          All access tokens and credentials are stored locally on your device and are not transmitted to any third-party servers.
          We implement industry-standard security measures to protect your data.
        </p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell, trade, or share your personal information with third parties. Your data is used exclusively for the
          operation of this application.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Request deletion of your data</li>
          <li>Revoke application access at any time through Facebook settings</li>
        </ul>

        <h2 id="data-deletion">7. Data Deletion</h2>
        <p>To request deletion of your data:</p>
        <ol>
          <li>Go to your Facebook Settings & Privacy</li>
          <li>Click "Settings" then "Apps and Websites"</li>
          <li>Find "Social Media Publisher" and click "Remove"</li>
          <li>Alternatively, email us at: hoff@learnrudi.com</li>
        </ol>
        <p>
          We will delete all stored data within 30 days of your request. Since our application stores data locally on your device
          and does not maintain server-side user databases, removing the app from Facebook automatically removes all access.
        </p>
        <p>
          When you remove the app from Facebook, Facebook will send an automated deletion request to our system,
          and we will confirm the deletion. You will receive a confirmation that your data deletion request has been processed.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>Our application is not intended for users under the age of 13. We do not knowingly collect personal information from children.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p>
          Email: hoff@learnrudi.com<br />
          Business: P&P Management Group LLC
        </p>

        <h2>11. Compliance</h2>
        <p>This application complies with:</p>
        <ul>
          <li>Meta Platform Terms</li>
          <li>Facebook Developer Policies</li>
          <li>Applicable data protection regulations</li>
        </ul>
      </div>
    </div>
  )
}
