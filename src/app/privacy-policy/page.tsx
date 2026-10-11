import type { Metadata } from 'next';
import { LegalPageContent } from '../../components/legal/LegalPageContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for Shrinika Travels.',
};

export default function PrivacyPolicyPage() {
  return <LegalPageContent title="Privacy Policy" />;
}
