/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import './i18n';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import NordicAIAlignment from './components/NordicAIAlignment';
import DataOpsHub from './components/DataOpsHub';
import Credentials from './components/Credentials';
import LanguageSwitcher from './components/LanguageSwitcher';

const NeuralBackground = lazy(() => import('./components/NeuralBackground'));

export default function App() {
  return (
    <main className="relative min-h-screen">
      <Suspense fallback={<div className="fixed inset-0 bg-nordic-navy" />}>
        <NeuralBackground />
      </Suspense>
      
      <LanguageSwitcher />
      
      <Hero />
      <TrustBar />
      <Services />
      <NordicAIAlignment />
      <DataOpsHub />
      <Credentials />
      
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="clinical-text opacity-40">
            © 2026 Nordic AI Data Ops. All Rights Reserved.
          </span>
          <div className="flex gap-8">
            <a href="#" className="clinical-text hover:text-aurora-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="clinical-text hover:text-aurora-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
