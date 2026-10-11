import type { Metadata } from 'next';
import { LegalPageContent } from '../../components/legal/LegalPageContent';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms of service for Shrinika Travels.',
};

export default function TermsOfServicePage() {
  return <LegalPageContent title="Terms of Service" />;
}
