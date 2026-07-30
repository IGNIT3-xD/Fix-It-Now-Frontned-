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
export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold font-[raleway]">Login to your account</h1>
                    <p className="font-[manrope] text-sm text-balance text-muted-foreground">
                        Fill in the form below to create your account
                    </p>
                </div>
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
                </Field>
                <Field>
                    <Button type="submit">Login</Button>
                </Field>
                <Field>
                    <FieldDescription className="px-6 text-center">
                        Didn&apos;t have an account? <Link href="/auth/register">Signup</Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
