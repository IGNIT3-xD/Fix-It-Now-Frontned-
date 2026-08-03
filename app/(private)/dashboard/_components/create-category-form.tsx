"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Plus } from "lucide-react"
import { useActionState, useState } from 'react';
import { createCategoriesAction } from "../_actions/dashboardActions"
import { useEffect } from 'react';
import { toast } from 'sonner';

export function CreateCategoryForm() {
    const [state, action, isPending] = useActionState(createCategoriesAction, null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? "Category created successfully.")
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOpen(false)
        } else {
            toast.error(state.message ?? "Something went wrong")
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button><Plus /> Create Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create a category</DialogTitle>
                    <DialogDescription>
                        Enter the category name and click save to create a new category.
                    </DialogDescription>
                </DialogHeader>

                <form action={action}>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name">Category Name</Label>
                            <Input id="name" name="name" required placeholder="Category Name" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type='button' variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                            {isPending ? 'Creating...' : 'Create Category'}
                        </Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    )
}
