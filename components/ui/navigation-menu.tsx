import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

type ElementWithMouseEvents = {
  onMouseEnter?: (event: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLElement>) => void;
};

// Updated type guard to use the more specific ElementWithMouseEvents type
const canReceiveMouseEvents = (
  child: React.ReactElement,
): child is React.ReactElement<ElementWithMouseEvents> => {
  // Native HTML elements (e.g., 'div', 'span', etc.) can receive mouse events
  if (typeof child.type === 'string') {
    return true;
  }

  // Custom React components can receive mouse events if they are function/class components
  if (typeof child.type === 'function') {
    const props = child.props as Partial<ElementWithMouseEvents>;
    return 'onMouseEnter' in props || 'onMouseLeave' in props;
  }

  // If it's not a string (native element) or function (custom component), return false
  return true;
};
const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const [offset, setOffset] = React.useState<number | null>(null);
  const listRef = React.useRef<HTMLUListElement>(null);
  const [value, setValue] = React.useState<string>('');
  const [activeTrigger, setActiveTrigger] = React.useState<HTMLElement | null>(
    null,
  );

  React.useEffect(() => {
    const list = listRef.current;
    if (activeTrigger && list) {
      const listWidth = list.offsetWidth;
      const triggerLeft = activeTrigger.offsetLeft;
      const triggerWidth = activeTrigger.offsetWidth;

      // Calculate offset to align the center of the menu with the trigger
      const triggerCenter = triggerLeft + triggerWidth / 2;
      const listCenter = listWidth / 2;

      // Subtract the list's center from the trigger's center to get the offset
      const newOffset = triggerCenter - listCenter;

      setOffset(newOffset + 375);
    } else if (value === '') {
      setOffset(null);
    }
  }, [activeTrigger, value]);

  return (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      value={value}
      onValueChange={setValue}
      {...props}
    >
      <NavigationMenuList className="flex flex-wrap" ref={listRef}>
        {React.Children.map(children, (child) => {
          // Ensure the child is a valid React element
          if (React.isValidElement(child) && canReceiveMouseEvents(child)) {
            // Check if it's a custom component (not a DOM element like 'div' or 'span')

            return React.cloneElement(child, {
              onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
                setActiveTrigger(event.currentTarget);
                child.props.onMouseEnter?.(event); // Call child's original onMouseEnter if it exists
              },
              onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
                setActiveTrigger(null);
                child.props.onMouseLeave?.(event); // Call child's original onMouseLeave if it exists
              },
            });
          }
          // Return the child as-is if it's a DOM element like 'div', 'span', etc.
          return child;
        })}
      </NavigationMenuList>
      <NavigationMenuViewport offset={offset} />
    </NavigationMenuPrimitive.Root>
  );
});
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      'group flex flex-1 list-none items-center justify-center space-x-1',
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors  focus:outline-none disabled:pointer-events-none disabled:opacity-50',
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger> & {
    offset?: number | null;
  }
>(({ className, children, offset = null, ...props }, ref) => {
  const [localOffset, setLocalOffset] = React.useState<number | null>(null);

  // useEffect to update offset whenever it changes
  React.useEffect(() => {
    if (offset !== null && offset !== localOffset) {
      setLocalOffset(offset);
    }
  }, [offset, localOffset]);

  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      style={{
        transform: localOffset ? `translateX(${localOffset}px)` : undefined,
      }} // Apply offset transform if provided
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
});

NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ',
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport> & {
    offset: number | null;
  }
>(({ className, offset, ...props }, ref) => (
  <div className={cn('absolute left-0 top-full flex justify-center')}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        'top-0 origin-top mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out md:w-[var(--radix-navigation-menu-viewport-width)]',
        className,
      )}
      ref={ref}
      style={{
        transform: offset !== null ? `translateX(${offset}px)` : undefined,
      }}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
