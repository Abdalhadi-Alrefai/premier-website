'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { LABORATORY_CONFIG } from '@/config/laboratory';
import { ContactFormData, ContactFormErrors, VisitorType } from '@/types/contact';
import {
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    visitorType: 'dentist',
    message: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handoffActive, setHandoffActive] = useState(false);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Validate Name
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t('validation.nameRequired');
    }

    // Validate Phone (digits with optional +, spaces, dashes - min 7 digits)
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!digitsOnly || digitsOnly.length < 7) {
      newErrors.phone = t('validation.phoneRequired');
    }

    // Validate Email if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t('validation.emailInvalid');
      }
    }

    // Validate Visitor Type
    if (!formData.visitorType) {
      newErrors.visitorType = t('validation.visitorTypeRequired');
    }

    // Validate Message (min 10 chars)
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = t('validation.messageRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const visitorTypeLabel = t(`visitorTypes.${formData.visitorType}`);

    // Build the formatted WhatsApp message template
    let messageBody = '';
    if (isArabic) {
      messageBody =
        `مرحباً مختبر بريمير لطب الأسنان،\n\n` +
        `أرغب بالتواصل مع المختبر.\n\n` +
        `الاسم:\n${formData.name.trim()}\n\n` +
        `رقم الهاتف:\n${formData.phone.trim()}\n\n` +
        (formData.email.trim() ? `البريد الإلكتروني:\n${formData.email.trim()}\n\n` : '') +
        `نوع الاستفسار:\n${visitorTypeLabel}\n\n` +
        `الرسالة:\n${formData.message.trim()}`;
    } else {
      messageBody =
        `Hello Premier Dental Lab,\n\n` +
        `I would like to contact your laboratory.\n\n` +
        `Name:\n${formData.name.trim()}\n\n` +
        `Phone:\n${formData.phone.trim()}\n\n` +
        (formData.email.trim() ? `Email:\n${formData.email.trim()}\n\n` : '') +
        `Inquiry Type:\n${visitorTypeLabel}\n\n` +
        `Message:\n${formData.message.trim()}`;
    }

    const whatsappUrl = `https://wa.me/${LABORATORY_CONFIG.primaryBranch.whatsappRaw}?text=${encodeURIComponent(
      messageBody,
    )}`;

    // Open WhatsApp in a safe new window / tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setHandoffActive(true);
  };

  return (
    <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-brand-surface/90 via-brand-surface/70 to-brand-canvas-dark/95 border border-brand-border/80 shadow-2xl backdrop-blur-md">
      {/* Form Header */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t('formTitle')}</h3>
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">{t('formSubtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Visitor Type Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-white uppercase tracking-wider">
            {t('visitorTypeLabel')}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {(['dentist', 'clinic', 'general'] as VisitorType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, visitorType: type }));
                  if (errors.visitorType) {
                    setErrors((prev) => ({ ...prev, visitorType: undefined }));
                  }
                }}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                  formData.visitorType === type
                    ? 'bg-brand-petrol-accent/15 border-brand-petrol-accent text-brand-petrol-accent shadow-[0_0_15px_rgba(34,166,191,0.2)]'
                    : 'bg-brand-surface border-brand-border text-brand-muted hover:border-brand-border/80 hover:text-white'
                }`}
              >
                {t(`visitorTypes.${type}`)}
              </button>
            ))}
          </div>
          {errors.visitorType && (
            <p className="text-xs text-rose-400 mt-1 flex items-center gap-1.5" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.visitorType}</span>
            </p>
          )}
        </div>

        {/* Name and Phone Inputs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold text-white uppercase tracking-wider"
            >
              {t('nameLabel')} <span className="text-brand-petrol-accent">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-brand-muted">
                <User className="w-4 h-4" />
              </div>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                maxLength={80}
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (errors.name) {
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }
                }}
                placeholder={t('namePlaceholder')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={`w-full ps-10 pe-4 py-3 rounded-xl bg-brand-canvas-dark/80 border text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-all ${
                  errors.name
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                    : 'border-brand-border focus:border-brand-petrol-accent focus:ring-1 focus:ring-brand-petrol-accent/80'
                }`}
              />
            </div>
            {errors.name && (
              <p
                id="contact-name-error"
                className="text-xs text-rose-400 flex items-center gap-1.5"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label
              htmlFor="contact-phone"
              className="block text-xs font-semibold text-white uppercase tracking-wider"
            >
              {t('phoneInputLabel')} <span className="text-brand-petrol-accent">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-brand-muted">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                dir="ltr"
                maxLength={25}
                value={formData.phone}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, phone: e.target.value }));
                  if (errors.phone) {
                    setErrors((prev) => ({ ...prev, phone: undefined }));
                  }
                }}
                placeholder={t('phonePlaceholder')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className={`w-full ps-10 pe-4 py-3 rounded-xl bg-brand-canvas-dark/80 border text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-all text-start ${
                  errors.phone
                    ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                    : 'border-brand-border focus:border-brand-petrol-accent focus:ring-1 focus:ring-brand-petrol-accent/80'
                }`}
              />
            </div>
            {errors.phone && (
              <p
                id="contact-phone-error"
                className="text-xs text-rose-400 flex items-center gap-1.5"
                role="alert"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email Address (Optional) */}
        <div className="space-y-2">
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-white uppercase tracking-wider"
          >
            {t('emailLabel')}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-brand-muted">
              <Mail className="w-4 h-4" />
            </div>
            <input
              id="contact-email"
              name="email"
              type="email"
              dir="ltr"
              maxLength={100}
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder={t('emailPlaceholder')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              className={`w-full ps-10 pe-4 py-3 rounded-xl bg-brand-canvas-dark/80 border text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-all text-start ${
                errors.email
                  ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-brand-border focus:border-brand-petrol-accent focus:ring-1 focus:ring-brand-petrol-accent/80'
              }`}
            />
          </div>
          {errors.email && (
            <p
              id="contact-email-error"
              className="text-xs text-rose-400 flex items-center gap-1.5"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Message Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-white uppercase tracking-wider"
            >
              {t('messageLabel')} <span className="text-brand-petrol-accent">*</span>
            </label>
            <span className="text-[11px] font-mono text-brand-muted">
              {formData.message.length} / 1000
            </span>
          </div>
          <div className="relative">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, message: e.target.value }));
                if (errors.message) {
                  setErrors((prev) => ({ ...prev, message: undefined }));
                }
              }}
              placeholder={t('messagePlaceholder')}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              className={`w-full p-4 rounded-xl bg-brand-canvas-dark/80 border text-sm text-white placeholder-brand-muted/50 focus:outline-none transition-all resize-y min-h-[110px] ${
                errors.message
                  ? 'border-rose-500/80 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                  : 'border-brand-border focus:border-brand-petrol-accent focus:ring-1 focus:ring-brand-petrol-accent/80'
              }`}
            />
          </div>
          {errors.message && (
            <p
              id="contact-message-error"
              className="text-xs text-rose-400 flex items-center gap-1.5"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Clinical Privacy Notice */}
        <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border/60 flex items-start gap-3 text-xs text-brand-muted leading-relaxed">
          <ShieldAlert className="w-4 h-4 text-brand-petrol-accent shrink-0 mt-0.5" />
          <p>{t('privacyNotice')}</p>
        </div>

        {/* Submit Action Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-900/30 hover:shadow-emerald-700/40 transition-all duration-200 cursor-pointer active:scale-[0.99]"
          >
            <Send className="w-4 h-4 rtl:-scale-x-100" />
            <span>{t('submitButton')}</span>
          </button>
        </div>

        {/* WhatsApp Handoff Notice & Clear Status */}
        <p className="text-[11px] text-center text-brand-muted/80 leading-relaxed px-2">
          {t('handoffNotice')}
        </p>

        {handoffActive && (
          <div
            className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5 text-xs text-emerald-300 animate-fade-in-up"
            role="status"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>
              {isArabic
                ? 'تم فتح تطبيق واتساب بنجاح. يُرجى مراجعة الرسالة والضغط على إرسال داخل واتساب.'
                : 'WhatsApp window opened. Please review the pre-filled message and press Send inside WhatsApp.'}
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
