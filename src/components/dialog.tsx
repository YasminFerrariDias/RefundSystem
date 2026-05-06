/* eslint-disable react-refresh/only-export-components */
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CardContainer } from "./CardContainer/CardContainer";
import cn from "classnames";

export const Dialog = DialogPrimitive.Root;

export const DialogTrigger = DialogPrimitive.Trigger;

export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  ref,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>

      <DialogPrimitive.Content ref={ref}
        className={cn(`
          data-[state=open]:animate-in 
          data-[state=open]:fade-in-0 
          data-[state=closed]:fade-out-0
          data-[state=closed]:animate-out
          data-[state=open]:slide-in-from-bottom-[48%]
          data-[state=closed]:slide-out-to-bottom-[48%]
          flex justify-center items-center
        `, 
        className
      )}
      {...props}
      >
        <CardContainer size="md" className="z-1">
          {children}
        </CardContainer>
      </DialogPrimitive.Content>

    </DialogPrimitive.Portal>
  )
}

