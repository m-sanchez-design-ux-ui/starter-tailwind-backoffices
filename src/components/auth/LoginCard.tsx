'use client';

import { useState } from 'react';

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[var(--color-neutral-primary-soft)] border border-[var(--color-neutral-tertiary-medium)] rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4 items-center justify-center">
      {/* Welcome Heading */}
      <h1 className="font-semibold text-2xl text-[var(--color-heading)] text-center leading-tight">
        Welcome!
      </h1>

      {/* Subtitle */}
      <h2 className="font-semibold text-xl text-[var(--color-heading)] text-center leading-tight">
        Sign in to your account
      </h2>

      {/* Description */}
      <p className="font-normal text-lg text-[var(--color-body)] text-center leading-tight">
        Continue your journey with Origin Solutions
      </p>

      {/* Form Container */}
      <div className="w-full flex flex-col gap-4">
        {/* Email Input Field */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-medium text-sm text-[var(--color-heading)]">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="font-normal text-sm text-[var(--color-body)] bg-[var(--color-neutral-secondary-medium)] border border-[var(--color-neutral-tertiary-medium)] rounded-lg px-3 py-3 w-full placeholder-[var(--color-default)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)] transition-colors"
          />
        </div>

        {/* Password Input Field */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password" className="font-medium text-sm text-[var(--color-heading)]">
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="font-normal text-sm text-[var(--color-body)] bg-[var(--color-neutral-secondary-medium)] border border-[var(--color-neutral-tertiary-medium)] rounded-lg px-3 py-3 w-full placeholder-[var(--color-default)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-[var(--color-brand)] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-[var(--color-body)] hover:text-[var(--color-heading)] transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM10 5c3.238 0 6.126 1.947 7.362 5-.26.875-.636 1.702-1.11 2.462l1.543 1.542a7.964 7.964 0 001.223-3.306C17.732 5.943 14.105 3 10 3c-.79 0-1.563.069-2.313.204l1.526 1.526c.3-.035.606-.05.914-.05zm6.978 4.38l1.48 1.48c.192-.698.324-1.42.318-2.16-1.274-4.057-5.064-7-9.542-7-1.458 0-2.868.281-4.164.826l1.572 1.572c.708-.181 1.449-.277 2.216-.277 3.238 0 6.126 1.947 7.362 5a3 3 0 01-.368 1.559zm1.854 2.863l-4.024-4.024c.093-.43.143-.874.143-1.32 0-2.209-1.791-4-4-4-.446 0-.89.05-1.32.143l-4.024-4.024a9.973 9.973 0 015.344-1.551c4.478 0 8.268 2.943 9.542 7-1.165 3.117-3.788 5.615-6.79 6.693l.174.245z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Remember Me Checkbox */}
      <div className="w-full flex items-center gap-2">
        <input
          id="remember"
          type="checkbox"
          defaultChecked
          className="w-4 h-4 rounded border-[var(--color-neutral-tertiary-medium)] bg-[var(--color-neutral-secondary-medium)] cursor-pointer"
        />
        <label htmlFor="remember" className="font-normal text-sm text-[var(--color-body)] cursor-pointer">
          Remember me
        </label>
      </div>

      {/* Login Button */}
      <button className="w-full font-semibold text-sm text-[var(--color-neutral-primary-soft)] bg-[var(--color-brand)] hover:bg-[var(--color-brand-strong)] rounded-lg px-5 py-2.5 transition-colors">
        Sign In
      </button>

      {/* Forgot Password Link */}
      <button className="font-medium text-sm text-[var(--color-brand)] underline hover:no-underline transition-all">
        Forgot password?
      </button>
    </div>
  );
}
