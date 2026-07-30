import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold font-[raleway]">Create your account</h1>
                    <p className="font-[manrope] text-sm text-balance text-muted-foreground">
                        Fill in the form below to create your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        className="bg-background"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                        className="bg-background"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="*******"
                        className="bg-background"
                    />
                    <FieldDescription>
                        Must be at least 6 characters long.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel htmlFor="profilePic">Upload your profile picture (Optional)</FieldLabel>
                    <Input
                        id="profilePic"
                        type="file"
                        className="bg-background"
                    />
                </Field>
                <Select>
                    <Field>
                        <FieldLabel htmlFor="role">Select your role</FieldLabel>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Role</SelectLabel>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="technician">Technician</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Field>
                </Select>
                <Field>
                    <Button type="submit">Create Account</Button>
                </Field>
                <Field>
                    <FieldDescription className="px-6 text-center">
                        Already have an account? <Link href="/auth/login">Login</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
