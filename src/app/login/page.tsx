'use client';

import Image from 'next/image';
import LoginCard from '@/components/auth/LoginCard';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--color-neutral-primary-soft)] flex items-center justify-center">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[var(--color-brand-medium)] opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--color-brand)] opacity-10 blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Logo/Header Area */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="Origin Solutions Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[var(--color-heading)]">
              Origin Solutions
            </h1>
          </div>

          {/* Login Card */}
          <LoginCard />

          {/* Footer Text */}
          <p className="text-sm text-[var(--color-body)] text-center max-w-md">
            © 2026 Origin Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
