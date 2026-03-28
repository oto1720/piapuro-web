import { RefObject, useEffect, useRef } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface UseModalFocusTrapOptions {
  isOpen: boolean;
  dialogRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
}

export function useModalFocusTrap({ isOpen, dialogRef, onClose }: UseModalFocusTrapOptions) {
  const previousFocusedRef = useRef<HTMLElement | null>(null);
  const focusableRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    previousFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';

    const dialog = dialogRef.current;
    const refreshFocusable = () => {
      if (!dialog) {
        focusableRef.current = [];
        return;
      }
      focusableRef.current = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    };

    refreshFocusable();

    if (dialog) {
      if (focusableRef.current.length > 0) {
        focusableRef.current[0].focus();
      } else {
        dialog.focus();
      }
    }

    const observer = dialog
      ? new MutationObserver(() => {
          refreshFocusable();
        })
      : null;

    if (observer && dialog) {
      observer.observe(dialog, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['tabindex', 'disabled', 'href', 'hidden', 'aria-hidden'],
      });
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (!dialog) return;

      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = focusableRef.current;

      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      observer?.disconnect();
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
      previousFocusedRef.current?.focus();
    };
  }, [isOpen, dialogRef, onClose]);
}
