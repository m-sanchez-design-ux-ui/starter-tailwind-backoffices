'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function PasswordChangePage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    if (newPassword.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    setIsLoading(true);
    try {
      // Add your password change logic here
      // await changePassword(currentPassword, newPassword);
      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Password change error:', error);
      setError('Error al cambiar la contraseña. Verifica tu contraseña actual.');
    } finally {
      setIsLoading(false);
    }
  };

  const PasswordVisibilityToggle = ({
    show,
    onClick,
    label,
  }: {
    show: boolean;
    onClick: () => void;
    label: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
      aria-label={label}
    >
      {show ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM11 4.049V3a1 1 0 10-2 0v1.049c-4.192.453-7.366 3.969-7.596 8.391A1 1 0 04.601 13c.212-3.891 2.741-7.029 6.398-7.391V8a1 1 0 102 0V4.049zM15.354 7.25a1 1 0 10-1.414-1.414l-1.763 1.763c-.576-.34-1.243-.531-1.961-.531-2.485 0-4.5 2.015-4.5 4.5 0 .718.19 1.385.531 1.961l-1.763 1.763a1 1 0 101.414 1.414l12.222-12.222z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );

  return (
    <main className="bg-white w-full h-fit lg:h-screen p-8 flex flex-col items-center dark:bg-gray-900 font-sans">
      {/* Elements Top Start */}
      <div className="absolute top-0 left-0 hidden lg:block h-10">
        <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
        <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
      </div>
      {/* Elements Top End */}

      <div className="flex flex-col items-center justify-between gap-5 h-fit my-auto">
        {/* Logo Client Start */}
        <Image
          className="w-30 md:w-36 h-fit z-10 lg:absolute lg:top-8"
          src="/images/logos/logo_client.svg"
          alt="Logo Client"
          width={144}
          height={44}
          priority
        />
        {/* Logo Client End */}

        {/* Container Inner Start */}
        <section className="flex flex-col justify-center items-center z-10 w-full max-w-sm lg:max-w-md gap-6">
          {/* Card Start */}
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Cambiar Contraseña
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base text-center">
                {success
                  ? 'Tu contraseña ha sido actualizada correctamente'
                  : 'Actualiza tu contraseña de forma segura'}
              </p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-800 dark:text-green-200">
                  ✓ Tu contraseña ha sido cambiada exitosamente. Puedes volver a tu cuenta.
                </p>
              </div>
            )}

            {!success ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                    <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                  </div>
                )}

                {/* Current Password Input */}
                <div>
                  <label
                    htmlFor="current-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña Actual
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      id="current-password"
                      name="current-password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-500 transition-colors duration-200"
                    />
                    <PasswordVisibilityToggle
                      show={showCurrentPassword}
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      label="Mostrar/ocultar contraseña actual"
                    />
                  </div>
                </div>

                {/* New Password Input */}
                <div>
                  <label
                    htmlFor="new-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nueva Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      id="new-password"
                      name="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-500 transition-colors duration-200"
                    />
                    <PasswordVisibilityToggle
                      show={showNewPassword}
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      label="Mostrar/ocultar nueva contraseña"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Mínimo 8 caracteres
                  </p>
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirmar Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirm-password"
                      name="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:focus:ring-blue-500 transition-colors duration-200"
                    />
                    <PasswordVisibilityToggle
                      show={showConfirmPassword}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      label="Mostrar/ocultar confirmación de contraseña"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-medium rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Actualizando...' : 'Cambiar Contraseña'}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <Link
                  href="/"
                  className="w-full block text-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-sm font-medium rounded-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors duration-200"
                >
                  Ir al Inicio
                </Link>
              </div>
            )}

            {/* Back Link */}
            <div className="mt-6 text-center">
              <Link
                href="/"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
              >
                ← Volver
              </Link>
            </div>
          </div>
          {/* Card End */}
        </section>
        {/* Container Inner End */}

        {/* Logo ORIGIN Start */}
        <Image
          src="/images/logos/logo_origin.svg"
          alt="Logo Origin"
          width={112}
          height={52}
          className="w-20 md:w-28 h-fit z-10 lg:absolute lg:bottom-8"
        />
        {/* Logo ORIGIN End */}
      </div>

      {/* Elements Bottom Start */}
      <div className="absolute bottom-0 right-0 hidden lg:block rotate-180">
        <div className="w-32 h-32 2xl:w-48 2xl:h-48 absolute top-14 left-24 2xl:top-16 rounded-full bg-blue-600 dark:bg-blue-500 opacity-10"></div>
        <div className="flex w-44 h-44 2xl:w-56 2xl:h-56 rounded-none rounded-br-full bg-blue-600 dark:bg-blue-500 opacity-15"></div>
      </div>
      {/* Elements Bottom End */}
    </main>
  );
}
