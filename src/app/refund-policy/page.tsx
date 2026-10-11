import type { Metadata } from 'next';
import { LegalPageContent } from '../../components/legal/LegalPageContent';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Read the refund policy for Shrinika Travels.',
};

export default function RefundPolicyPage() {
  return <LegalPageContent title="Refund Policy" />;
}
