/* eslint-disable react-refresh/only-export-components */
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CardContainer } from "./CardContainer/CardContainer";
import cn from "classnames";
import { Text } from "./Text/Text";
import { IconButton } from "./Button/IconButton/IconButton";
import { IoMdClose } from "react-icons/io";
import type React from "react";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<
  typeof DialogPrimitive.Overlay
>) {
  return <DialogPrimitive.Overlay
    className={cn(`
      fixed inset-0 z-50 bg-gray-400
      backdrop-blur-sm
      data-[state=open]:animate-in
      data-[state=open]:fade-in-0 
      data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0
  `, className)}
    {...props}
  />
}

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content ref={ref}
        className={cn(`
          bg-white
          fixed left-[50%] top-[50%] w-full max-w-lg 
          z-60 translate-x-[-50%] translate-y-[-50%]
          data-[state=open]:animate-in
          data-[state=open]:fade-in-0 
          data-[state=open]:slide-in-from-bottom-[48%]
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0
          data-[state=closed]:slide-out-to-bottom-[48%]
        `,
          className
        )}
        {...props}
      >
        <CardContainer size="md" className="z-51">

          {children}
        </CardContainer>
      </DialogPrimitive.Content>

    </DialogPrimitive.Portal>
  )
}

interface DialogHeaderProps 
  extends React.ComponentProps<"div"> {
  title: string
  text: string
} 

export function DialogHeader({
  title, text, className, ...props
}: DialogHeaderProps) {
  return (
    <>
      <header className={cn(`flex items-center justify-between`, className)}
        {...props}
      >
        <DialogPrimitive.Title>
          <Text size="lg" decoration="bold" className="flex-1">{title}</Text>
          <Text size="md" decoration="regular" className="flex-1">{text}</Text>
        </DialogPrimitive.Title>
        <DialogClose asChild>
          <IconButton icon={IoMdClose} buttonColor="transparent" />
        </DialogClose>
      </header>
    </>
  )
}

export function DialogBody({children, ...props}: React.ComponentProps<"div">) {
  return <div {...props}>{children}</div>
}

export function DialogFooter({
  children, ...props
}: React.ComponentProps<"footer">) {
  return <footer className="flex items-center" {...props}>
    {children}
  </footer>
}
