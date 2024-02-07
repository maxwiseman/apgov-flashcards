'use client'

import { useEffect } from 'react';
import { toast } from 'sonner';

export function SendNotification(): React.ReactElement {

  useEffect(() => {
    toast.info('Flashcards have been moved to Scholarly study', { duration: 100000000, action: { label: "Show me", onClick: () => { window.location.href = 'https://scholarlyapp.io/study' }}})
  }, [])

  return (
    <></>
  );
}