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
				<AlertDialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-surface p-8">
					<AlertDialog.Title>
						<div className="mb-6 flex gap-6">
							<span>
								<ExclamationTriangleIcon className="size-6 text-yellow-500" />
							</span>
							<p className="font-bold text-yellow-500">
								The Flatpak version is not optimized. For optimized versions,
								please select other formats.
							</p>
						</div>
					</AlertDialog.Title>
					<div className="flex justify-end gap-4">
						<AlertDialog.Cancel asChild>
							<Button variant={"secondary"}>Cancel</Button>
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
