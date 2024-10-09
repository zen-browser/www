"use client";

import { Button } from "@/components/ui/button";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface AlertDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: () => void;
}

export const AlertModal = ({
	open,
	onOpenChange,
	onConfirm,
}: AlertDialogProps) => {
	return (
		<AlertDialog.Root open={open} onOpenChange={onOpenChange}>
			<AlertDialog.Portal>
				<AlertDialog.Overlay className="fixed inset-0 bg-black opacity-40" />
				<AlertDialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-surface p-8 max-w-[450px]">
					<AlertDialog.Title>
						<div className="mb-6 flex flex-col items-center gap-4">
							<span>
								<ExclamationTriangleIcon className="size-12 text-yellow-500" />
							</span>
							<p className="font-bold text-yellow-500 text-center">
								The Flatpak version is not optimized. For optimized versions,
								please select other formats.
							</p>
						</div>
					</AlertDialog.Title>
					<div className="flex gap-4">
						<AlertDialog.Cancel className="flex-1" asChild>
							<Button variant={"outline"} className="bg-transparent">Cancel</Button>
						</AlertDialog.Cancel>
						<AlertDialog.Action onClick={onConfirm} asChild>
							<Button variant={"default"} className="">
								Download anyway
							</Button>
						</AlertDialog.Action>
					</div>
				</AlertDialog.Content>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
};
