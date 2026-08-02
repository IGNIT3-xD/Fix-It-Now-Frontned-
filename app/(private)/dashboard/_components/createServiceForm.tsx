"use client"
import * as React from "react"
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
import { PlusIcon } from 'lucide-react';
import { createServiceAction } from './../_actions/dashboardActions';
import { toast } from "sonner"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { useActionState, useEffect } from "react"

type Category = {
    id: string
    name: string
}

type CreateServiceFormProps = {
    categories: Category[]
}

export function CreateServiceForm({ categories }: CreateServiceFormProps) {
    const [open, setOpen] = React.useState(false)
    const [categoryId, setCategoryId] = React.useState("")
    const [state, formAction, isPending] = useActionState(createServiceAction, null)

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message ?? "Service created successfully.")
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setOpen(false)
        } else {
            toast.error(state.message ?? "Something went wrong")
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button><PlusIcon />Create Service</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Create A Service</DialogTitle>
                    <DialogDescription>
                        Create a service. Please provide title, description, price, thumbnail and category.
                    </DialogDescription>
                </DialogHeader>
                
                <form action={formAction} className="flex flex-col gap-4">
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="title">Service Title</Label>
                            <Input required id="title" name="title" placeholder="Plumbing service...." />
                        </Field>
                        <Field>
                            <Label htmlFor="description">Description</Label>
                            <Input required id="description" name="description" placeholder="Your service description here." />
                        </Field>
                        <Field>
                            <Label htmlFor="thumbnail">Thumbnail</Label>
                            <Input required id="thumbnail" name="thumbnail" placeholder="Thumbnail url here" />
                        </Field>
                        <Field>
                            <Label htmlFor="price">Price</Label>
                            <Input required id="price" name="price" type="number" placeholder="1000.00" />
                        </Field>
                        <Field>
                            <Label htmlFor="categoryId">Category</Label>
                            <Select value={categoryId} onValueChange={setCategoryId} required>
                                <SelectTrigger className="w-full" id="categoryId">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <input type="hidden" name="categoryId" value={categoryId} required />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isPending || !categoryId}>
                            {isPending ? "Saving..." : "Create Service"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}