'use client';

import React, { useState, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface InteractiveHoverCardProps {
  triggerContent: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  openDelay?: number;
  closeDelay?: number;
}

const InteractiveHoverCard: React.FC<InteractiveHoverCardProps> = ({
  triggerContent,
  children,
  className = '',
  contentClassName = '',
  openDelay = 0,
  closeDelay = 0,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HoverCard
      open={isOpen}
      onOpenChange={setIsOpen}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <HoverCardTrigger className="px-2 mx-0" asChild>
        <Button
          variant="ghost"
          className={`p-0 ${className} hover:bg-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {triggerContent}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className={`w-full ${contentClassName}`}>
        {children}
      </HoverCardContent>
    </HoverCard>
  );
};

export default InteractiveHoverCard;
